import express from "express"
import { isSignedIn } from "../controllers/product.js";

import { Control } from "../models/admin.js"
import { Product } from "../models/product.js"
import bcrypt from "bcrypt"
import { isAdminSignedIn } from "../controllers/Admin.js";


const router =express.Router()
// router.post('/',createControl);
// router.get('/', isAdminSignedIn, getControl);
// router.get('/:id', isAdminSignedIn, getControlById);
// router.put('/:id', isAdminSignedIn,  updateControl);
// router.delete('/:id', isAdminSignedIn, deleteControl);

router.get ("/",async(req,res)=>{
    try{
        const controler= await Control.find().populate("user","name")
        if(!controler){
            return res.status(400).json({message:"Couldn't fecth your data"})
        }
        res.status(200).json(controler)

    }catch (error){
        console.log("error",error)
        res.status(500).json({message:"Internal server error"})
    }
})

router.post ("/", async(req, res)=>{
    try {
        
        const controler = await new Control(
            {...req.body,
                  
                 user: req.user._id}
                 ).save()
       if(!controler){
        return res.status(400).json({message:"Error posting your content"})
       }
       res.status(200).json(controler)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})
router.put("/edit/:id", async(req, res)=>{
    try {
        const updatedcontroler = await Control.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
            ); 
            if(!updatedcontroler){
                return res.status(400).json({message:"Error updating your content"}) 
            }
            res.status(200).json(updatedcontroler) 
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

router.delete("/:id", async(req, res)=>{
    try {
        const deletecontroler = await Control.findByIdAndDelete(
            {_id:req.params.id}
        )
        if(!deletecontroler){
            return res.status(400).json({message:"Error Deleting your content"}) 
        }
        res.status(200).json({message:"Deleted Succesfully"}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})
 export const controlRouter= router