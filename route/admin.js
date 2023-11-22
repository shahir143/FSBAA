const express=require('express');

const route=express.Router();
const adminControl=require('../controllers/user');

route.post('/data',adminControl.saveData);
route.get('/user-data',adminControl.getData);
route.delete('/delete-data/:id',adminControl.deleteData);

module.exports=route;