import mongoose from "mongoose";


const User_Schema = new mongoose.Schema({
    
    email : {type : String , required : true , unique:true},
    username  : {type : String , required : true},
    password : {type   : String , required : true}

})

const user_model  =mongoose.model('users' , User_Schema);


export default user_model;