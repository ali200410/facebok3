import exp from "constants"
import { Post } from "../../../models/post.model.js"
import { User } from "../../../models/user.model.js"
import { where } from "sequelize"


export const addpost = async (req,res,next) =>{
    const {title,content,userId} = req.body
    // console.log( {title,content,userId});
    const user =await User.findOne({where:{id :userId,loginstatus:true}})
    if(!user){
        return res.status(404).json({message:"user not found or not loign", success:false})
    }
    const post = Post.create({title,content,userId})
    return res.status(200).json({message:"post creat successfully",post})
}


////
export const getall =async (req,res,next) =>{
    const posts = await Post.findAll();
    return res.status(200).json({message:"getall users successfully",success:true,posts})
}

export const updatePost = async (req, res, next) => {
    //get data from params
    const { id } = req.params;
    //get data from req
    const { title, content } = req.body;
    const findPost = await Post.findByPk(id); // {} , null
    if (!findPost) {
      return res
        .status(404)
        .json({ massage: "post not found", success: false, data: { id } });
    }
    const updetedPost = await Post.update({ title, content }, { where: { id } });
    if (!updetedPost) {
      return res
        .status(500)
        .json({ massage: "fail to update post", success: false });
    }
    return res.status(201).json({
      massage: "post updeted successfully",
      data: updetedPost,
      success: true,
    });
  };

  
export const deletepost =async (req,res,next) =>{
    const{id} =req.params;
    const{userId}= req.body;
    const post = await Post.destroy({where:{id,userId}})

    if(!post){
        return res.status(404).json({message:"not found"})
    }
    return res.status(201).json({message:"post deleted successfly"})
}

export const getspicife= async(req,res,next) =>{
    const post =await Post.findAll({
        include:{model:User},
        
    }
    )
    res.status(200).json({message:"post and user get successflly",post})
}