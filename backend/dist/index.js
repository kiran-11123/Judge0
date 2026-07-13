import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectRedis } from './redis/redis.js';
import ConnectDB from './db_connection/db.js';
import Auth_Router from './routes/user_auth_routes.js';
import Code_Router from './routes/user_code_routes.js';
import Problem_Router from './routes/problem_routes.js';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import logger from './logging/logger.js';
import RunLogRetentionJob from './logging/log_retention.js';
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
await ConnectRedis();
await ConnectDB();
RunLogRetentionJob();
const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        message: 'Too Many requests , please try again'
    }
});
app.use(Limiter);
app.use("/api/auth", Auth_Router);
app.use("/api/code", Code_Router);
app.use("/api/problem", Problem_Router);
app.listen(PORT, () => {
    logger.info(`Server is Running on PORT  : ${PORT}`);
});
//# sourceMappingURL=index.js.map