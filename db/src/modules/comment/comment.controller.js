import { comment } from "../../../models/comment.js"
import { Post } from "../../../models/post.model.js"
import { User } from "../../../models/user.model.js"



export const addcoment =async (req,res,next) =>{
    const {content,userId,postId} =req.body
    const user =await User.findOne({where:{id:userId,loginstatus:true}})
    if(!user){
        return res.status(404).json({message:" user not found or updtt" ,success:false})
    }
    const commentt = await comment.create({content,userId,postId})
     return res.status(201).json({message:"comment create successfly", commentt})
}


export const getallcomm =async (req,res,next) =>{
    const cmmentt= await comment.findAll()
    
    res.status(200).json({message:"getall comment successfuiy",success:true,cmmentt})
}


//update comment
export const updateComment = async (req, res, next) => {
    //get data from params
    const { id} = req.params;
    //get data from req
    const { content } = req.body;
    const findcomment = await comment.findByPk(id); // {} , null
    if (!findcomment) {
      return res
        .status(404)
        .json({ massage: "post not found", success: false, data: { id } });
    }
    const updetedcomment = await comment.update({ content }, { where: { id } });
    if (!updetedcomment) {
      return res
        .status(500)
        .json({ massage: "fail to update comment", success: false });
    }
    return res.status(201).json({
      massage: "comment updeted successfully",
      data: updetedcomment,
      success: true,
    });
  };
  
  //delete comment
  export const deleteComment = async (req, res, next) => {
    //get data from params
    const { id } = req.params;
    const FindToDeCommentlete = await comment.findByPk(id)//{},Null
    if (!FindToDeCommentlete) {
      return res.status(404).json({massage : 'Comment not found' , success : false})
    }
    const CommentToDelete = await comment.destroy({where : {id}})
    if (!CommentToDelete) {
      return res.status(500).json({massage : 'fail to delete comment' ,success : false})
    }
    return res.status(200).json({massage : "comment deleted successfully" , success : true})
  };


  export const getUser_post_comment= async(req,res,next) =>{
    const user =await User.findAll({
        include:{
            model:Post, attributes:["title"],
        include:{model:comment}},
        
    }
    )
    res.status(200).json({message:"post and user and comment get successflly",user})
}