import { where } from "sequelize"
import { User } from "../../../models/user.model.js"
import bcrypt from "bcrypt"
export const signup= async(req,res,next)=>{
    //get data from req
    let {name,email,password}=req.body

    //check existens
    let userexist =await User.findOne({where:{email}})
    if(userexist){
        return res.status(409).json({message:"user alredy exist", success:false})
    }
    //hash password
    password =bcrypt.hashSync(password,10)
    //add 
    const usercreat =await User.create({name,email,password})
    if(!usercreat){
        return res.status(500).json({message:"fail to creat user" ,success:false})
    }
    return res.status(200).json({message:"user creat successfully",success:true})
}
export const login = async(req,res,next)=>{
    //get data req
    const {email,password}= req.body
    //check existans
    const user= await User.findOne({where:{email}})
    if(!user){
        return res.status(404).json({message:"user not found",success:false})
    }
    //check match password
    const matchpassword =bcrypt.compareSync(password,user.password)
    if(!matchpassword){
        return res.status(404).json({message:"inviled password",success:false})
    }
    const loginstaus =await user.update({loginstatus:true});
    res.status(200).json({message:"user login successfully",user})


    // return res.status(200).json({message:"user login successfuily",success:true,user})
}


export const logOut= async(req,res,next)=>{
    //get data req
    const {email,password}= req.body
    //check existans
    const user= await User.findOne({where:{email}})
    if(!user){
        return res.status(404).json({message:"user not found",success:false})
    }
    //check match password
    const matchpassword =bcrypt.compareSync(password,user.password)
    if(!matchpassword){
        return res.status(404).json({message:"inviled password",success:false})
    }
    const loginstaus =await user.update({loginstatus:false});
    res.status(200).json({message:"user logOut successfully",user})


    // return res.status(200).json({message:"user login successfuily",success:true,user})
}

