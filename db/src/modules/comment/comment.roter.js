import { Router } from "express";
import { addcoment, deleteComment, getallcomm, getUser_post_comment, updateComment, } from "./comment.controller.js";


const commentRoter =Router()

commentRoter.post('/addcomment',addcoment)
commentRoter.get('/getallcomment',getallcomm)
commentRoter.get('/getalluserwith',getUser_post_comment)
commentRoter.put('/updetcomment/:id',updateComment)
commentRoter.delete('/deletcomment/:id',deleteComment)
export default commentRoter