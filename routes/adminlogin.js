import { Admin, generateAuthToke } from "../models/users.js"
import bcrypt from "bcrypt"
import express from "express"

const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        
        const admin = await Admin.findOne({email : req.body.email})
        if (!admin){
            return res.status(400).json({message : "Invalid Credentials"})
        }

        const validatePassword = await bcrypt.compare(
            req.body.password,
            admin.password
        )
        if (!validatePassword) {
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const token = generateAuthToke(admin._id)
        res.status(200).json({message: "Loged in successfully", token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message :"Internal server error"})
    }
})
export const adminLoginRouter = router