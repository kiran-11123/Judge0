import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express();


const PORT = process.env.PORT || 5000

dotenv.config();
app.use(express.json())
app.use(cors())

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT  : ${PORT}`);
})