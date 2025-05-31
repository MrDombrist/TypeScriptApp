import { Router } from "express";
import upload from "../middleware/upload.js";
import { registration, login, checkAuth, logout } from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const userRouter = new Router();

userRouter.post('/register', upload.single('avatar'), registration);
userRouter.post('/login', login);
userRouter.get('/login', authenticateToken, checkAuth);
userRouter.delete('/logout', logout);

export default userRouter;