var mongoose = require('mongoose');
var Logger = require('tracer').colorConsole();
var _ = require('underscore');
var config = require('../config');

var db = mongoose.createConnection(config.mongodb_connect); //创建一个数据库连接

db.on('error', function(error){
    //Logger.error(error);
});

// Schema 结构
var userSchema = new mongoose.Schema({
	user_id:'',
	artical_title:'',
	artical_date:'',
	artical_markdown:'',
	artical_html:''
},{collection:'horicall_artical'});

var artical = db.model('horicall_artical', userSchema);

function Artical (option){
	this.option = option;
}

Artical.prototype = {
	constructor:Artical,
	insertArtical:function(data,callback){
		var obj = new artical(data);
		obj.save(function(){
			Logger.debug(arguments);
			callback(arguments);
		})
	},
	getArticalList:function(query,callback){
		artical.find(function(err, doc){
			callback = callback || function(){};
			callback(doc);
		})
	},
	getArticalById:function(id,callback){
		artical.findById(id,function(err, doc){
			callback = callback || function(){};
			callback(doc);
		})
	},
	delArticalById:function(id,callback){
		artical.remove({'_id':id},function(err, doc){
			callback = callback || function(){};
			callback(doc);
		})
	},
	updateArtical:function(id,obj,callback){
		artical.update({'_id':id},obj,{},function(err,doc){
			callback = callback || function(){};
			callback(doc);
		})
	}
}

exports.artical = Artical;
