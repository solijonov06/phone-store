import dotenv from "dotenv"; //in commonjs  const dotenv = require("dotenv")
import server from "./app";
import mongoose from "mongoose";

dotenv.config();//access environmental

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data)=>{
        console.log("MongoDB connected successfully"); //to know it reaches here
        const PORT = process.env.PORT ?? 3004;
       
        server.listen(PORT, function (){
            console.log( `Server is running on port http://localhost:${PORT}`);//server name
            console.info(`Admin project on http://localhost:${PORT}/admin \n `);//admin server name
        })
    })
    .catch((err)=>{
        console.error("MongoDB connection error:", err);
    });