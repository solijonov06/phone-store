import dotenv from "dotenv"; //in commonjs  const dotenv = require("dotenv")

dotenv.config();
import app from "./app";


import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data)=>{
        console.log("MongoDB connected successfully");
        const PORT = process.env.PORT ?? 3004;
       
        app.listen(PORT, function (){
            console.log( `Server is running on port http://localhost:${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n `);
        })
    })
    .catch((err)=>{
        console.error("MongoDB connection error:", err);
    });