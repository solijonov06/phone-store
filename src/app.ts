import cors from "cors";
import express from "express"; 
import path from "path";
import routerAdmin from "./router-admin";
import router from "./router";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import cookieParser from "cookie-parser";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session"; // sessionlarni mongodbda saqlash
import { T } from "./libs/types/common"; //universal object
import {Server as SocketIOServer} from "socket.io";
import http from "http";


const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions" // sessionlarni saqlash uchun mongodbda collection
});

/**1-ENTRANCE **/
const app =express();
app.use(express.static(path.join(__dirname, "public"))) // faylorlarni public papkasidan olish uchun ===> MIDDLEWARE
app.use("/uploads", express.static("./uploads")); // faylorlarni uploads papkasidan olish uchun ===> MIDDLEWARE
app.use(express.urlencoded({extended: true})); // tradidional API uchun     ===> MIDDLEWARE
app.use(express.json()); // rest API uchun      ===> MIDDLEWARE
app.use(cors({
    credentials: true,
    origin: true
}))
app.use(cookieParser())//===> MIDDLEWARE

app.use(morgan(MORGAN_FORMAT));//===> MIDDLEWARE


/**2-SESSIONS **/
app.use(
    session({
    secret: String(process.env.SESSION_SECRET), // sessionlarni shifrlash uchun
    cookie:{
        maxAge: 1000*3600*6 // 3 soatlik session
    },
    store: store, // sessionlarni mongodbda saqlash uchun
    resave: true, // har safar sessionni saqlash uchun 
    saveUninitialized: true 


}));

app.use((req, res, next)=>{
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member; // sessiondagi memberni res.locals ga saqlash
    next();
})

/**3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**4-ROUTERS **/
app.use("/admin", routerAdmin);          //SSR: EJS
app.use("/", router);                   //SPA: REACT              middleware Design pattern

const server = http.createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: true,
        credentials: true
    }
});
let summaryClient = 0;
io.on("connection", (socket)=>{
    summaryClient++;
    console.log(`Connection & total [${summaryClient}] clients connected.`);

    // Send total clients to the newly connected user
    socket.emit("getClientsCount", summaryClient);

    // Broadcast to ALL clients that a new user connected (with updated count)
    io.emit("userConnected", { 
        totalClients: summaryClient,
        message: `New user connected. Total: ${summaryClient}`
    });

    socket.on("disconnect", ()=>{
        summaryClient--;
        console.log(`Disconnection & total [${summaryClient}] clients connected.`);

        // Broadcast to ALL clients that a user disconnected (with updated count)
        io.emit("userDisconnected", { 
            totalClients: summaryClient,
            message: `User disconnected. Total: ${summaryClient}`
        });
    });
});
export default server; // module.exports = app in commonjs


