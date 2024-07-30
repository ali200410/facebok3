import { Router } from "express";
import { login, logOut, signup } from "./user.controller.js";


const userroter=Router()

userroter.post('/signup',signup)
userroter.post('/login',login)
userroter.put('/logout',logOut)
export default userroter