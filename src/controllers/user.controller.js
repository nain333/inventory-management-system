import UserModel from "../models/user.model.js";
export default class UserController{
    getRegister(req,res){
        res.render('register')
    }
    getSignedIn(req,res){
        res.render('sign-in',{
            errorMessage:null
        })
    }
    postRegister(req,res){
        const {userName,email,password}=req.body;
        UserModel.add({
            userName,email,password
        })
        res.render('sign-in',{
            errorMessage:null
        })
    }
    postSignIn(req,res){
        const{email,password}=req.body;
        console.log('insidePostSingnedIn'," ",email,password)
      const user=  UserModel.isValidUser(email,password);
        if(!user){
           return res.render('sign-in',{
                errorMessage:'Invalid Credentials'
            })

        }
        req.session.userEmail=email;
        return res.redirect('/');
    }


}