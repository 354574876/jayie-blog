var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var webpack = require('webpack')
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
// var compiler = webpack(config)
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))


var router = require('./routes/index').obj;
var config = require("./config");
var ejs = require('ejs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', config.views);

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/src/img/favicon.ico'));
app.use(bodyParser.json());//解析客户端请求，例如req.body.name
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//静态文件要访问的目录，例如index.ejs.里面的js文件src指向的就是'public'目录
app.use(express.static(path.join(__dirname, 'public')));

for(var i=0;i<config.router.length;i++){
    (function(listNum){
        var     
            routerObj = config.router[listNum],
            type      = routerObj.type
            ;
        app.get(routerObj.url,function(req,res){
            console.log("Cookies: ", req.cookies)
            res.render(routerObj.view, { title: routerObj.title,res:res,req:req});
       })
    })(i)
}
for(var j=0;j<config.ajaxApi.length;j++){
    (function(jNum){
        var     
            ajaxObj = config.ajaxApi[jNum]
            ;
        app.post(ajaxObj.url,router[ajaxObj.api]);   
    })(j)
}
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
module.exports = app;
