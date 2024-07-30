import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";
import { User } from "./user.model.js";


export const Post = sequelize.define('post',{
    title:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    content:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    // author:{
    //     type:DataTypes.STRING(200),
    //     allowNull:false
    // }
},{
    timestamps:false,
    updatedAt:false
})
  
User.hasMany(Post ,{
    onUpdate :"CASCADE",
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false,
    }
})
Post.belongsTo(User)