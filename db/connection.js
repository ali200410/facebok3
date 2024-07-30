import { Sequelize } from "sequelize";


//connect to db
export const sequelize = new Sequelize('facebook' ,'root','',{
    host :"localhost",
    dialect:"mysql"
})
export const CONNECTDB = () =>{sequelize.authenticate().then(() =>{
    console.log('db connected sucessfully');
}).catch((err) => {
    console.log('fail to connect to db' ,err);
})} 
sequelize.sync(
    {
    alter:true,
    // force:true
}
)