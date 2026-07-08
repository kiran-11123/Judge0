import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ConnectRedis } from './redis/redis.js';
const app = express();



const PORT = process.env.PORT || 5000

dotenv.config();
app.use(express.json())
app.use(cors())
await ConnectRedis();

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT  : ${PORT}`);
})