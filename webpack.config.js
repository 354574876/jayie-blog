var webpack = require('webpack');
var path = require('path');
var glob = require('glob')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

//定义文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'public/src/js/app.js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'public/dist/js');
var SOURCE_PATH = path.resolve(ROOT_PATH, 'public/src');
var MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules');

function entries (globPath) {
    var files = glob.sync(globPath);
    var entries = {}, entry, dirname, basename,outpath;

    for (var i = 0; i < files.length; i++) {
        outpath = '';
        entry = files[i];
        dirname = path.dirname(entry);
        basename = path.basename(entry, '.js');
        if(dirname.indexOf('/js/')>0){
            outpath = dirname.substring(dirname.indexOf('/js/')+4,dirname.length);  
        }
        entries[path.join(outpath, basename)] =   path.resolve(ROOT_PATH, entry);
    }
    return entries;
}
;

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: entries('public/src/**/*.js'),
    //入口文件输出配置
    output: {
        path: BUILD_PATH,
        filename: '[name]'+'.js',
        publicPath:'http://www.jayie.cn',
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        //查找module的话从这里开始查找
        root: [SOURCE_PATH,MODULE_PATH], //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss','.css','.ejs','.png','.jpg'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            
        }
    },
    //文件有更新自动刷新页面
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
};
