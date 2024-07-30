import { Router } from "express";
import { addpost, deletepost, getall, getspicife, updatePost} from "./post.controler.js";





const postroter=Router()

postroter.post('/addpost',addpost)
postroter.get('/getpost',getall)
postroter.get('/getspicife',getspicife)
postroter.put('/updet/:id', updatePost)
postroter.delete('/deletepost/:id',deletepost)
export default postroter