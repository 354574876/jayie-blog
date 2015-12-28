var mongoose = require('mongoose');
var Logger = require('tracer').colorConsole();

/*Logger.log('hello');
Logger.trace('trace');
Logger.debug('debug');
Logger.info('info');
Logger.warn('warn');
Logger.error('error');*/
//mongoose.connect('mongodb://localhost:27017/horicall_db');
var db = mongoose.createConnection('mongodb://localhost:27017/horicall_db'); //创建一个数据库连接

db.on('error', function(error){
    Logger.error(error);
});

// Schema 结构
var userSchema = new mongoose.Schema({
	name:String,
	password:String,
    age:Number
},{collection:'user'});

var User = db.model('user', userSchema);
User.count({name:'junjie'},function(err, thor) {
  if (err) return console.error(err);
  if(thor>0){
    User.find(function(res,res){
        Logger.debug(res);
    })
  }else{
    Logger.debug('无记录');
  }
});
/*
// 添加 mongoose 实例方法
mongooseSchema.methods.findbyusername = function(username, callback) {
	console.log(username);
    return this.model('mongoose').find({username: username}, callback);
}
//创建一个实例
var mongooseModel = db.model('mongoose', mongooseSchema);
// 查询记录 基于 entity 操作
var doc = {name : 'junjie'};
var mongooseEntity = new mongooseModel(doc);
mongooseEntity.findbyusername('junjie',function(error,result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
    // 关闭数据库链接
    db.close();
});*/

exports.mongoose = mongoose;
