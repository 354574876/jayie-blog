var express = require('express');
var router = express.Router();
var config = require('../config');
var UserModel = require('../models/User');
/* GET home page. */
/*router.get('/', function(req, res) {
  res.render('index', { title: '首页' });
});
router.get('/welcome', function(req, res) {
  res.render('welcome', { title: '登陆成功！' , name: 'huangjunjie'});
});
module.exports = router;*/
//	localhost:3000/getuser/
exports.getUser = function(req, res){  
  console.log(UserModel.User);
};
