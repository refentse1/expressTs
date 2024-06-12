import express,{Express,Request,Response} from 'express';
import 'dotenv/config';
import userController from "./controllers/UserController";


const PORT = process.env.PORT || 8001|| 8002 || 9000;
const app = express();

app.use(express.json())

app.use("/api/users",userController);

app.listen(PORT,()=>{
    console.log(`Server Listening on: ${PORT}`)
});