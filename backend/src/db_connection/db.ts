import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const MONGODB_URI :any = process.env.MONGODB_URI 

const ConnectDB = async()=>{

    try{

         await mongoose.connect(MONGODB_URI)

         console.log('MongoDB is connected Successfully')

    }
    catch(err){
        console.error('Error while connecting MongDB ' , err);
        process.exit(0);
    }
   

}


export default ConnectDB;