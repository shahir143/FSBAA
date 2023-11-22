const Sequelize=require('sequelize');

const sequelize=new Sequelize('bookingappointment','root','root',{
    dialect :'mysql',
    host:'localhost',
});

module.exports=sequelize;