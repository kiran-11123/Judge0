import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.listen(5000, () => {
    console.log('server is running');
});
//# sourceMappingURL=index.js.map