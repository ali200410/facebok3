import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

 export const User =sequelize.define('user',{
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(150),
        allowNull:false,
        unique:false
    }, 
    password:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    loginstatus:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
 },{
    timestamps:false,
    updatedAt :false
    
})
