import { Queue } from "bullmq";
import bullmqConnection from "./ioredis_connection.js";
export const codeQueue = new Queue("code_execution_queue", {
    connection: bullmqConnection
});
//# sourceMappingURL=bullMQ_consumer.js.map