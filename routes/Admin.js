import express from "express"
import { generateAuthToke } from "../models/Adminlogin.js"
import bcrypt from "bcrypt"
import { Admin } from "../models/Adminlogin.js"


const router = express.Router()

router.post("/", async(req, res)=>{
    try {
        
    let admin = await Admin.findOne({email : req.body.email})
    if(admin) return res.status(409).json({message:"Email already exist"})

   // generate password

   const salt = await bcrypt.genSalt(10); 
   const hasedPassword = await bcrypt.hash(req.body.password, salt); 

   // new password updation 
    admin = await new Admin ({
        name : req.body.name,
        email : req.body.email,
        password : hasedPassword
    }).save(); 
    const token = generateAuthToke(admin._id)
    res.status(201).json({message : "Successfully signed up", token})
} catch (error) {
    console.log(error)
       res.status(500).json({message : "Internal server error"}) 
}
})

//login

export const adminSignupRouter = router; 
