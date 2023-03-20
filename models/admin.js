import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const {ObjectId}=mongoose.Schema

const contorlerSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter product Name"],
            trim: true,
          },
          Price : {type :String, 
            require:true,
            },
           
          image:{
            type:String,

          },
          quantity:{
            type:Number
          },
          hours:{
            type:Number
          },

         
        user : {
          type : ObjectId,
          ref : "user" 
       } 
        

    },
    {
        timestamps: true
    }
)

const Control=mongoose.model("control",contorlerSchema)
export{Control}