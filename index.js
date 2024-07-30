import express from "express"
import { CONNECTDB} from "./db/connection.js"
import { User } from "./db/models/user.model.js"
import { Post } from "./db/models/post.model.js"
import userroter from "./db/src/modules/user/user.router.js"
import { comment } from "./db/models/comment.js"
import postroter from "./db/src/modules/post/post.router.js"
import commentRoter from "./db/src/modules/comment/comment.roter.js"


const app =express()
const port =3062
CONNECTDB()

app.use(express.json())
app.use(userroter)
app.use(postroter)
app.use(commentRoter)
app.use(User)
app.use(Post)
app.use(comment)



app.listen(port ,()=>{
    console.log('server is running' ,port);
})