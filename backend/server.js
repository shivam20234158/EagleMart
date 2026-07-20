//const express = require("express");(if not module in type)
import express from "express";
import dotenv from "dotenv";
//routes
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
//alllow to read content of .env file and add all variable to process.env
dotenv.config();

const app=express();
const PORT=process.env.PORT || 5001;
app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
//our server is listening on this port
connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
 