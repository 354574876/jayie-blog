var express = require('express');
var router = express.Router();
var config = require('../config');
var user = require('../models/User').User;
var Logger = require('tracer').colorConsole();
 
var userModel = new user();

exports.dologin = function  (req , res ) {
  userModel.checkUser(req.body,function(val){
      if(val.success){
        //res.send(val);
        res.redirect('/welcome?id='+val.data[0].name);
      }else{
        res.send(val);
      }
    })
}

