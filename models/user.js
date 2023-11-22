const Sequelize=require('sequelize')

const sequelize=require('../util/database');

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    phone:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
    }
});

module.exports=User;