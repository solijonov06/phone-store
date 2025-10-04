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
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions" // sessionlarni saqlash uchun mongodbda collection
});

/**1-ENTRANCE **/
const app =express();
app.use(express.static(path.join(__dirname, "public"))) // faylorlarni public papkasidan olish uchun
app.use("/uploads", express.static("./uploads")); // faylorlarni uploads papkasidan olish uchun
app.use(express.urlencoded({extended: true})); // tradidional API uchun
app.use(express.json()); // rest API uchun
app.use(cors({
    credentials: true,
    origin: true
}))
app.use(cookieParser())

app.use(morgan(MORGAN_FORMAT));


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

export default app; // module.exports = app in commonjs


