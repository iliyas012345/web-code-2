import mongoose from "mongoose";
import dotenv from "dotenv"

export function connectDataBase(){
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    try {
        mongoose.connect(process.env.MONGO_URL,params)
        console.log("Mongo db is connected")
    } catch (error) {
        console.log("Mongodb connection error",error)
        
    }
}
export default mongoose