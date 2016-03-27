var express = require('express');
var router = express.Router();
var config = require('../config');
var Logger = require('tracer').colorConsole();

exports.index = function(req, res){  
  res.render("index",
  	{"title":"test","layout":false,"comments":[
	  	{"user":"gainover","content":"test1"},
	  	{"user":"zongzi","content":"test2"},
	  	{"user":"maomao","content":"test3"}
  	],
  	staticPath:config.staticPath,
  	message:''
  });
};
// localhost:3000/welcome/
exports.welcome = function(req, res){
	var userNmae = req.query.id || 'huangjunjie';
  res.render('welcome', { title: '首页' ,name:userNmae,staticPath:config.staticPath,message:'1'});
};

exports.login = function(req,res){
  res.render('login',{title:'登陆页面'});
}

exports.flex = function(req, res){
  res.render('demo/flex', { title: 'flex 布局'});
};