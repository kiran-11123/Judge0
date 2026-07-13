import { createClient } from "redis";
import logger from "../logging/logger.js";
const redisClient_connection = createClient({
    url: 'redis://localhost:6379'
});
redisClient_connection.on('error', (error) => {
    logger.error('Redis client error', { error });
});
export async function ConnectRedis() {
    await redisClient_connection.connect();
    logger.info('Redis connected successfully');
}
export default redisClient_connection;
//# sourceMappingURL=redis.js.map