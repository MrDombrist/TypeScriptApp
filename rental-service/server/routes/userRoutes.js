import { Router } from "express";
import upload from "../middleware/upload.js";
import { registration } from "../controllers/userController.js";


const userRouter = new Router();

userRouter.post('/register', upload.single('avatar'), registration);

export default userRouter;
