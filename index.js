import  dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { connectDataBase } from "./db.js"
import { signupRouter } from "./routes/user.js"
import {  loginRouter } from "./routes/login.js"
import { productRouter } from "./routes/product.js"
import { isSignedIn } from "./controllers/product.js"
import { adminSignupRouter } from "./routes/Admin.js"
import { adminLoginRouter } from "./routes/adminlogin.js"
import { controlRouter } from "./routes/userdetails.js"
import { User } from "./models/users.js"
import { Product } from "./models/product.js"

dotenv.config()

connectDataBase()

const app=express()
const PORT=process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/api/signup",signupRouter)
app.use("/api/login",loginRouter)
app.use("/api/product",isSignedIn,productRouter)
app.use("/api/signadmin",adminSignupRouter)
app.use("/api/loginadmin",adminLoginRouter)
app.use("/api/control",controlRouter)

app.listen(PORT,()=>console.log(`server is up and running in port ${PORT}`))