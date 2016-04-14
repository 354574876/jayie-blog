var mongoose = require('mongoose');
var Logger = require('tracer').colorConsole();
var _ = require('underscore');
var result = require('../config');

var db = mongoose.createConnection('mongodb://localhost:27017/horicall_db'); //创建一个数据库连接

db.on('error', function(error){
    //Logger.error(error);
});

// Schema 结构
var userSchema = new mongoose.Schema({
	name:String,
	password:String,
    age:Number
},{collection:'user'});

var User = db.model('user', userSchema);
User.count({name:'junjie1'},function(err, thor) {
  if (err) return console.error(err);
  if(thor>0){
    User.find(function(res,res){
        Logger.debug('人数',res.length);
    })
  }else{
    Logger.debug('无记录');
  }
});

function UserModel (option){
	this.option = option;
}
UserModel.prototype.checkUser = function(data,callback){
	var search = data?_.isObject(data)?data:{}:{},
		result = {success:false,data:[],errormessage:''},
		callback = callback?callback:function(){};
	if(!data){
		result.errormessage = 'no search data';
		callback(result);
	}else{
		//根据用户名查询
		User.find({name:data.name},function(err,dos){
			if (err){
				result.errormessage = err;
				callback(result);
			}else{
				//判断用户账号是否存在
				if(dos.length===0){
					result.errormessage = '用户不存在';
					callback(result);
				}else{
					//判断用户密码是否正确
					User.find({name:data.name,password:data.password},function(error,res){
						if(err){
							result.errormessage = error;
							callback(error);
						}else{
							if(res.length>0){
								result.success = true;
								result.data = res;
								callback(result);
							}else{
								result.errormessage = '密码错误！';
								callback(result);
							}
						}
					})
				}
			};
		})
	}
}

exports.User = UserModel;
