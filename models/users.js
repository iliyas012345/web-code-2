import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:32,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
        },
       
    }

)
const generateAuthToken=(id)=>{
    return jwt.sign({id},process.env.Secretkey)
}
const User=mongoose.model("user",userSchema)
export {User,generateAuthToken}



//Admin
const adminSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:32,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
        },
       
    }

)
const generateAuthToke=(id)=>{
    return jwt.sign({id},process.env.Secretkey)
}
const Admin=mongoose.model("admin",adminSchema)
export {Admin,generateAuthToke}