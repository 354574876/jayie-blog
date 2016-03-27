var express = require('express');
var router  = express.Router();
var config  = require('../config');
var Logger  = require('tracer').colorConsole();
var user    = require('../models/User').User;

//登陆
exports.dologin = function  (req , res ) {
  var userModel = new user();
  userModel.checkUser(req.body,function(val){
      if(val.success){
        res.redirect('/welcome?id='+val.data[0].name);
      }
    })
}