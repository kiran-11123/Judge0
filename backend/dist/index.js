import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectRedis } from './redis/redis.js';
import ConnectDB from './db_connection/db.js';
import Auth_Router from './routes/user_auth_routes.js';
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use(cors());
await ConnectRedis();
await ConnectDB();
app.use("/api/auth", Auth_Router);
app.listen(PORT, () => {
    console.log(`Server is Running on PORT  : ${PORT}`);
});
//# sourceMappingURL=index.js.map