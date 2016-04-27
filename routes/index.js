var express = require('express');
var router  = express.Router();
var config  = require('../config');
var user    = require('../models/User').User;
var Logger  = require('tracer').colorConsole();
var artical = require('../models/artical').artical;



var postUrl = {
  dologin:function  (req , res ) {
    var userModel = new user();
    userModel.checkUser(req.body,function(val){
      if(val.success){
        //res.send(val);
        res.redirect('/welcome?id='+val.data[0].name);
      }else{
        res.send(val);
      }
    })
  },
  insertArtical:function(req,res){
    var articalService = new artical;
    articalService.insertArtical(req.body,function(val){
      res.send(val);
    })
  },
  getArticalList:function(req,res){
    var articalService = new artical;
    articalService.getArticalList(req.body,function(val){
      res.send(val);
    })
  }
}

exports.obj = postUrl;
