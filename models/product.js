
import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema

const productSchema= new mongoose.Schema(
    {
        names: {
            type: String,
            required: [true, "Please Enter product Name"],
            trim: true,
          },
          type: {
            type: String,
            required: [true,],
            trim: true,
          },
          images: 
             {
                type: String,
                
              },
              
             payPerDay: {
            type: Number,
            required: [true, "Please Enter product Price"],
            maxLength: [8, "Price cannot exceed 8 characters"],
          },
          capacity: {
            type: Number,
            require:true,
            default: 0,
          },
          
          
          bookedTimeSlots:[{
           from:{type:String,
          required:true},
          to:{type:String,
            required:true},
        }],
        user : {
          type : ObjectId,
          ref : "user" 
       } 
        

    },
    {
      timestamps: true
  }
)

const Product=mongoose.model("product",productSchema)
export{Product}