import express from 'express';
import UserController from '../controllers/user.controller.js';
const userController= new UserController();
const router=express.Router();
router.get("/register", userController.getRegister.bind(userController));
router.get('/signIn',userController.getSignedIn);
router.post('/register',userController.postRegister);
export default router;
