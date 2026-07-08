import { Queue, Worker } from "bullmq";
import bullmqConnection from "./ioredis_connection.js";
import { executePython } from "./python_worker/python_worker.js";
import { executeJavaScript } from "./javascript_worker/javascript_worker.js";
import { executeCpp } from "./c++_worker/c_worker.js";
import { executeJava } from "./java_worker/java_woker.js";
export const codeQueue = new Queue("code_execution_queue", {
    connection: bullmqConnection
});
const codeWorker = new Worker("code_execution_queue", async (job) => {
    const { user_id, title, language, code } = job.data;
    // Validation
    if (!user_id || !title || !language || !code) {
        throw new Error("Missing required fields");
    }
    if (!["python", "java", "javascript", "c++"].includes(language)) {
        throw new Error("Invalid language");
    }
    switch (language) {
        case "python":
            return await executePython(code);
        case "java":
            return await executeJava(code);
        case "javascript":
            return await executeJavaScript(code);
        case "c++":
            return await executeCpp(code);
        default:
            throw new Error("Unsupported language");
    }
}, {
    connection: bullmqConnection,
});
//# sourceMappingURL=bullMQ_consumer.js.map