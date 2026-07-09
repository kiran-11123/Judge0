import { Queue , Worker  } from "bullmq";
import  bullmqConnection  from "./ioredis_connection.js";
import { executePython } from "./python_worker/python_worker.js";
import { executeJavaScript } from "./javascript_worker/javascript_worker.js";
import { executeCpp } from "./c++_worker/c_worker.js";
import { executeJava } from "./java_worker/java_woker.js";

export const codeQueue = new Queue("code_execution_queue", {
    connection: bullmqConnection
});


const codeWorker = new Worker(
  "code_execution_queue",
  async (job) => {
    const { user_id, title, language, code } = job.data;
    // Validation
    if (!user_id || !title || !language || !code) {
      throw new Error("Missing required fields");
    }

    if (!["python", "java", "javascript", "c++"].includes(language)) {
      throw new Error("Invalid language");
    }

    switch (language) {
    
            case "python": {
                const result = await executePython(code);
                return result;
            }

            case "java": {
                const result = await executeJava(code);
                return result;
            }

            case "javascript": {
                const result = await executeJavaScript(code);
                return result;
            }

            case "c++": {
                const result = await executeCpp(code);
                return result;
            }

            default:
                throw new Error("Unsupported language");

    }
  },
  {
    connection: bullmqConnection,
    concurrency: 5, // Adjust concurrency as needed
  }
);

codeWorker.on("completed", (job) => {
  console.log(`Job ${job.id} completed with result:`, job.returnvalue);
}
);

codeWorker.on("failed", (job :any, err) => {
  console.error(`Job ${job.id} failed with error:`, err);
}
);

codeWorker.on("error", (err) => {
    console.error(err);
});
