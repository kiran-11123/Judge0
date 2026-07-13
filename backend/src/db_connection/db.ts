import mongoose from 'mongoose'
import dotenv from 'dotenv'
import logger from '../logging/logger.js'
dotenv.config();
const MONGODB_URI: any = process.env.MONGODB_URI

const ConnectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        logger.info('MongoDB connected successfully')
    } catch (err) {
        logger.error('Error while connecting MongoDB', { error: err });
        process.exit(0);
    }
}

export default ConnectDB;