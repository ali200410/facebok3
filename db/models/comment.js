
import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { Post } from "./post.model.js";
import { User } from "./user.model.js";



export const comment = sequelize.define('comment',{
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false,
    updatedAt:false
})

Post.hasMany(comment,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
    foreignKey:{
        allowNull:false
    }

})

User.hasMany(comment,{
    onUpdate:"CASCADE",
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
}
    
)


comment.belongsTo(User)
comment.belongsTo(Post)