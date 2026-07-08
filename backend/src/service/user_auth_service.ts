import user_model from "../db_connection/users_schema.js";
import dotenv from 'dotenv'
dotenv.config();
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET as string;


if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is missing");
}
export const SignIn_Service = async(email :string  , password :string)=>{
      
    try{

        const check_user = await user_model.findOne({
            email : email
        })

        if(!check_user){
            throw new Error('User Not Found')
        }

        const password_check = await bcrypt.compare(password , check_user.password);

        if(!password_check) {
            throw new Error('Credentials Wrong')
        }
        
        const user_details = {'email ' : check_user.email , 'user_id' : check_user._id}
        const token = jwt.sign(user_details , JWT_SECRET ,{expiresIn : '1h'});


        return token;


    }
    catch(er){
        throw er;
    }
}



export const SignUp_Service = async(email :string , username :string, password :string)=>{
     
    try{


      const existing_user = await user_model.findOne({
    $or: [
        { email },
        { username }
    ]
});

        if (existing_user) {

            if (existing_user.email === email) {
                throw new Error("User Already Registered");
            }

            if (existing_user.username === username) {
                throw new Error("Username Already Taken");
            }
        }
      

        const hash_password = await bcrypt.hash(password ,10 );

       const new_user = new user_model({
    email,
    username,
    password: hash_password
});

        await new_user.save();

        return true;



    }
    catch(er){
        throw er;
    }
}