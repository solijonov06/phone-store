import dotenv from "dotenv"; //in commonjs  const dotenv = require("dotenv")

// MUST load env BEFORE importing app.ts (which also calls dotenv.config)
dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});

import server from "./app";
import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data)=>{
        console.log("MongoDB connected successfully"); //to know it reaches here
        const PORT = process.env.PORT ?? 3004;
       
        (server.listen as any)(PORT,"0.0.0.0", function (){
            console.log( `Server is running on port http://localhost:${PORT}`);//server name
            console.info(`Admin project on http://localhost:${PORT}/admin \n `);//admin server name
        })
    })
    .catch((err)=>{
        console.error("MongoDB connection error:", err);
    });