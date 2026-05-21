import UserModel from "../models/user.model.js";
export default class UserController{
    getRegister(req,res){
        res.render('register')
    }
    getSignedIn(req,res){
        res.render('sign-in')
    }
    postRegister(req,res){
        const {userName,email,password}=req.body;
        UserModel.add({
            userName,email,password
        })
        res.render('sign-in')
    }
}