import express from "express"
import { Product } from "../models/product.js"

const router =express.Router()

router.get ("/",async(req,res)=>{
    try{
        const product= await Product.find().populate("user","name")
        if(!product){
            return res.status(400).json({message:"Couldn't fecth your data"})
        }
        res.status(200).json(product)

    }catch (error){
        console.log("error",error)
        res.status(500).json({message:"Internal server error"})
    }
})

router.post ("/", async(req, res)=>{
    try {
        
        const product = await new Product(
            {...req.body,
                  
                 user: req.user._id}
                 ).save()
       if(!product){
        return res.status(400).json({message:"Error posting your content"})
       }
       res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})
router.put("/edit/:id", async(req, res)=>{
    try {
        const updatedproduct = await Product.findOneAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            {new:true}
            ); 
            if(!updatedproduct){
                return res.status(400).json({message:"Error updating your content"}) 
            }
            res.status(200).json(updatedproduct) 
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

router.delete("/:id", async(req, res)=>{
    try {
        const deleteproduct = await Product.findByIdAndDelete(
            {_id:req.params.id}
        )
        if(!deleteproduct){
            return res.status(400).json({message:"Error Deleting your content"}) 
        }
        res.status(200).json({message:"Deleted Succesfully"}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})
export const productRouter= router