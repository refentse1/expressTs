import express,{ Router,Request,Response } from "express";
import {UserServiceImpl} from "../serviceImpl/UserServiceImpl";

const router = express.Router();
const userService = new UserServiceImpl(); 

router.post("/add",function(request:Request,response:Response){
    try{
        const user=request.body;
        if(userService.addUser(user)){
            response.send(200);
        }
    }catch(error){
        console.log(error);
    }
})

router.get("/:id",function(request:Request,response:Response){
    try{
        const user_id:number = parseInt(request.params.id,10);
        const User = userService.getUser(user_id)
        response.send(User);
    }catch(error){
        console.log(error)
    }
})

export default router;
