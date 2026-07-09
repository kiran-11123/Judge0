import { Queue, Worker } from "bullmq";
import mongoose from "mongoose";
import bullmqConnection from "./ioredis_connection.js";
import { executePython } from "./python_worker/python_worker.js";
import { executeJavaScript } from "./javascript_worker/javascript_worker.js";
import { executeCpp } from "./c++_worker/c_worker.js";

import code_model from "../db_connection/user_programs.js";
import { Judge_Java } from "./java_worker/Judge_Java.js";

export const codeQueue = new Queue("code_execution_queue", {
  connection: bullmqConnection,
});

const updateSubmissionStatus = async (
  userId: string | mongoose.Types.ObjectId | undefined,
  problemId: string | mongoose.Types.ObjectId | undefined,
  submissionId: string | mongoose.Types.ObjectId | undefined,
  status: any
) => {
  if (!userId || !problemId || !submissionId) {
    return;
  }

  const normalizedUserId =
    userId instanceof mongoose.Types.ObjectId ? userId : new mongoose.Types.ObjectId(userId);
  const normalizedProblemId =
    problemId instanceof mongoose.Types.ObjectId ? problemId : new mongoose.Types.ObjectId(problemId);
  const normalizedSubmissionId =
    submissionId instanceof mongoose.Types.ObjectId
      ? submissionId
      : new mongoose.Types.ObjectId(submissionId);

  await code_model.updateOne(
    {
      user_id: normalizedUserId,
      problem_id: normalizedProblemId,
      "codes_saved._id": normalizedSubmissionId,
    },
    {
      $set: {
        "codes_saved.$.status": status,
      },
    }
  );
};

const codeWorker = new Worker(
  "code_execution_queue",
  async (job) => {
    const { problem_id, user_id, submission_id, title, language, code } = job.data;

    if (!user_id || !submission_id || !title || !language || !code) {
      throw new Error("Missing required fields");
    }

    if (!["python", "java", "javascript", "c++"].includes(language)) {
      throw new Error("Invalid language");
    }

    await updateSubmissionStatus(user_id, problem_id, submission_id, "running");

    try {
      switch (language) {
        case "python": {
          const result = await executePython(code, user_id, submission_id);
          await updateSubmissionStatus(
            user_id,
            problem_id,
            submission_id,
            (result as { status?: string } | undefined)?.status === "failed" ? "failed" : "completed"
          );
          return result;
        }

        case "java": {
          const result = await Judge_Java(problem_id, user_id, submission_id, code);

          console.log("Java execution result:", result);
          console.log('result stderr', result.stderr)
          console.log('Total Test cases' , result.total);
          console.log('Test Cases Passed' , result.passed)
          let submissionStatus = "Pending";

          if (result.status === "accepted") {
            submissionStatus = "Accepted";
          }
          else if (result.status === "wrong_answer") {
            submissionStatus = "Wrong Answer";
          }
          else if (result.status === "runtime_error") {
            submissionStatus = "Runtime Error";
          }
          else if (result.status === "compilation_error") {
            submissionStatus = "Compilation Error";
          }
          else if (result.status === 'time_limit_exceeded') {
            submissionStatus = "Time Limit Exceeded"
          }
          await updateSubmissionStatus(
            user_id,
            problem_id,
            submission_id,
            submissionStatus
          );
          return result;
        }

        case "javascript": {
          const result = await executeJavaScript(code, user_id, submission_id);
          await updateSubmissionStatus(
            user_id,
            problem_id,
            submission_id,
            (result as { status?: string } | undefined)?.status === "failed" ? "failed" : "completed"
          );
          return result;
        }

        case "c++": {
          const result = await executeCpp(code, user_id, submission_id);
          await updateSubmissionStatus(
            user_id,
            problem_id,
            submission_id,
            (result as { status?: string } | undefined)?.status === "failed" ? "failed" : "completed"
          );
          return result;
        }

        default:
          throw new Error("Unsupported language");
      }
    } catch (error) {
      await updateSubmissionStatus(user_id, problem_id, submission_id, "failed");
      throw error;
    }
  },
  {
    connection: bullmqConnection,
    concurrency: 5,
  }
);

codeWorker.on("completed", (job) => {
  console.log(`Job ${job.id} completed with result:`, job.returnvalue);
});

codeWorker.on("failed", (job: any, err) => {
  console.error(`Job ${job.id} failed with error:`, err);
});

codeWorker.on("error", (err) => {
  console.error(err);
});
