import { Redis } from "ioredis";
import logger from "../logging/logger.js";
const bullmqConnection = new Redis({
    host: "localhost",
    port: 6379,
    maxRetriesPerRequest: null,
});
bullmqConnection.on("connect", () => {
    logger.info("IORedis connected");
});
bullmqConnection.on("error", (err) => {
    logger.error("Redis error", { error: err });
});
export default bullmqConnection;
//# sourceMappingURL=ioredis_connection.js.map