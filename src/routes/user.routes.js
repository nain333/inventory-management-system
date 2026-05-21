import express from 'express';
import UserController from '../controllers/user.controller.js';
const userController= new UserController();
const router=express.Router();
router.get("/register", userController.getRegister.bind(userController));
router.get('/signIn',userController.getSignedIn);
router.post('/signIn',userController.postSignIn)
router.post('/register',userController.postRegister);
router.get('/signOut',userController.signOut)
export default router;
