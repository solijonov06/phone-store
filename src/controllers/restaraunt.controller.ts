import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { MemberInput,LoginInput, AdminRequest } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/error";
import { Http2ServerResponse } from "http2";
// RES: send & json & render & redirect & end

const restarauntController:  T ={};
const memberService =  new MemberService();
restarauntController.goHome = (req: Request, res: Response) => {
    try{
        console.log("goHome");
        res.render("home");
    }catch(err) {
        console.log("Error, go home", err);
        res.redirect("/admin");
    }
};

restarauntController.getSignup = (req: Request, res: Response) => {
    try{
        console.log("getSignup");
          res.render("signup");
    }catch(err) {
        console.log("Error, get signup", err);
        res.redirect("/admin");
    }
};
    

restarauntController.getLogin = (req: Request, res: Response) => {
    try{
        console.log("getLogin");
           res.render("login");
    }catch(err) {
        console.log("Error, get login", err);
        res.redirect("/admin");
    }
};


restarauntController.processSignup = async (req: AdminRequest, res: Response) => {
    try{
        console.log("processSignup");
        console.log("req.body:", req.body);
       const file = req.file;
       if (!file)
        throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
    

        const newMember: MemberInput = req.body;
        newMember.memberImage = file?.path.replace(/\\/g, "/"); // Windows compatibility
        newMember.memberType = MemberType.RESTARAUNT;

       const result = await memberService.processSignup(newMember);
    //    sessions authentication
       req.session.member = result; // sessionga saqlash
       req.session.save(function (){
       res.redirect("/admin/product/all");

    })

       
    }catch(err) {
        console.log("Error, get processSignup", err);
            const message = err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert("${message}"); window.location.replace("/admin/signup")</script>`);
    
    }
};


restarauntController.processLogin = async (req: AdminRequest, res: Response) => {
    try{
        console.log("processLogin");
        console.log("req.body:", req.body);
        
        const input: LoginInput = req.body,
         result = await memberService.processLogin(input);

     
        // sessions authentication
        req.session.member = result; // sessionga saqlash
        req.session.save(function (){
       res.redirect("/admin/product/all");

    })
       
    }catch(err) {
        console.log("Error, get processLogin", err);
        const message = err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert("${message}"); window.location.replace("/admin/login")</script>`);
    }
};

restarauntController.logout = async (req: AdminRequest, res: Response) => {
    try{
        console.log("logout");
        req.session.destroy(function (){
            res.redirect("/admin");
        })
        

    
       
    }catch(err) {
        console.log("Error, logout", err);
        res.redirect("/admin");
    }
};

restarauntController.getUsers = async (req: Request, res: Response) => {
    try{
        console.log("getUsers");
        const result = await memberService.getUsers();
        console.log("result:", result);
        res.render("users", {users: result});
    }catch(err) {
        console.log("Error, get login", err);
        res.redirect("/admin/login");
    }
};

restarauntController.updateChosenUser = async (req: Request, res: Response) => {
    try{
        console.log("updateChosenUser");
        const result = await memberService.updateChosenUser(req.body);
        res.status(HttpCode.OK).json({data: result});
    }catch(err) {
        console.log("Error, get login", err);
     if(err instanceof Errors) res.status(err.code).json(err);
        else   res.status(Errors.standard.code).json(Errors.standard);
    }
};




restarauntController.checkAuthSesssion= async (req: AdminRequest, res: Response) => {
    try{
        console.log("checkAuthSesssion");
        
       if(req.session?.member) res.send(`<script>alert("${req.session.member.memberNick}")</script>`);
         else res.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`);
       
    }catch(err) {
        console.log("Error, checkAuthSesssion", err);
        res.send(err);
    }
};

restarauntController.verifyRestaraunt = (
    req: AdminRequest, res: Response, next: Function
) =>{
   
        console.log("verifyRestaraunt");
        if(req.session?.member?.memberType === MemberType.RESTARAUNT){
           req.member = req.session.member
            next();
        }else{
          const message = Message.NOT_AUTHENTICATED;
          res.send(`<script>alert("${message}"); window.location.replace("/admin/login")</script>`);
        }
 
};


export default restarauntController;