//importing express
const express=require('express');

//importing cors
const cors=require('cors');

//importing bodyParser
const bodyParser=require('body-parser');

//importing sequelize
const sequelize= require('./util/database')

//importing the routers
const adminRoute=require('./route/admin');


const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.json())

app.use('/user',adminRoute);
app.use((req,res,next)=>{
    console.log('404');
    res.status(404);
})

sequelize.sync().then(()=>{
    console.log('server port started ');
    app.listen(4000);
}).catch(err=>{console.log(err)});
