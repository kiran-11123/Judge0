import code_model from "../db_connection/user_programs.js";
import mongoose from "mongoose";




export const Code_Submission_Service = async( user_id :string , title: string,  language :string, code :string)=>{
     
    try{

         if (!mongoose.Types.ObjectId.isValid(user_id)) {
            throw new Error("Invalid User ID");
        }

        const new_user_id = new mongoose.Types.ObjectId(user_id);
        
        const result = await code_model.findOneAndUpdate(

            {user_id : new_user_id},

            {
                $push :{
                    Codes_Saved : {
                        title,
                    language,
                    code
                    }
                }
            },
            {
                new : true,
                upsert: true
            }
        )

        return result


    }
    catch(er){
         throw er;
    }
}


export const Get_User_Codes_Service = async(user_id :string)=>{
    try{

        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            throw new Error("Invalid User ID");
        }

        const user_id_new = new mongoose.Types.ObjectId(user_id);

        const get_data = await code_model.findOne({
            user_id :user_id_new
        } ,
            {
                Codes_Saved: 1,
                _id: 0
            })

        return get_data?.Codes_Saved ?? [];


    }

    catch(er){
        throw er;
    }




}