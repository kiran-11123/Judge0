import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ConnectRedis } from './redis/redis.js';
import ConnectDB from './db_connection/db.js';
import Auth_Router from './routes/user_auth_routes.js';
import Code_Router from './routes/user_code_routes.js';
import cookieParser  from 'cookie-parser'
const app = express();
const PORT = process.env.PORT || 5000
dotenv.config();
app.use(express.json())
app.use(cors())
app.use(cookieParser());
await ConnectRedis();
await ConnectDB();


app.use("/api/auth" , Auth_Router);
app.use("/api/code" , Code_Router)





app.listen(PORT,()=>{
    console.log(`Server is Running on PORT  : ${PORT}`);
})