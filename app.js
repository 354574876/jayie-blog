var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var logger = require('./log').logger;


var router = require('./routes/index');
var config = require("./config");

var users = require('./routes/users');
var userList = require('./routes/user');
var ejs = require('ejs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', config.views);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());//解析客户端请求，例如req.body.name
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



//静态文件要访问的目录，例如index.ejs.里面的js文件src指向的就是'public'目录
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', router);
app.use('/users', users);
app.post('/index', router.dologin);
app.get("/",router.index);
app.get("/index",router.index);
app.get("/login",router.login);
app.post("/dologin",router.dologin);
app.get('/welcome',router.welcome);
app.get('/demo/flex',router.flex);
app.get('/getuser' ,userList.getUser);
app.get('/nologin/:no',function(req,res){
    console.log(req.params);
    res.send('正在请求'+req.params)             //req.params={no:'输入的值'}
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.use(function(req, res, next){
    res.locals._ = require("underscore");
    res.locals.staticPath = config.staticPath;
    //res.locals.userCurrent = req.session.user;
    next();
});

 //app.get('/login',router.login);
// app.post('/login',routes.doLogin);
// app.get('/logout',routes.logout);

 
module.exports = app;
