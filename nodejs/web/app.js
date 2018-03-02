//express
var express = require('express');
//cooke模块
var Cookies = require("cookies");
//swig文件
var swig = require('swig');
//path
var path = require('path');
var app = express();

//加载body-parser处理表单提交的数据
var bodyParser = require("body-parser");

//加载数据模块
var mongoose = require('mongoose');

//引入数据模型
var User = require("./models/user.js");




//设置静态文件托管,当url访问以public开始时，则直接访问__dirname+'./public'

app.use('/public',express.static(__dirname +'/public'));//在index.html目录中会，以‘/public’开头的目录会变成localhost:3000/public

//处理bodyParse,在路由接口中可以获取前台请求的数据
app.use(bodyParser.urlencoded({extended:true}));

//设置cookie,加载所有页面都会使用该中间键
app.use(function(req,res,next){
    req.cookies = new Cookies(req,res);
    req.userInfo = {};//这里设置userInfo
    if(req.cookies.get("userInfo")){
        try {
            req.userInfo = JSON.parse(req.cookies.get("userInfo"));
            //查看当前用户的类型
            User.findById(req.userInfo._id).then(function(userInfo){
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();
            })
        } catch (error) {
            next()
        }
    }else{
        next();
    }
})

//端口配置
var config = {
    port: 3000
}
//设置swig页面不缓存
swig.setDefaults({
    cache: false
})
app.set('view cache', false);
//读取html文件,第一个参数是模板引擎的名称，同时也是模板引擎的文件后缀，第二个参数标识解析处理模板的内容方法
app.engine('html', swig.renderFile);

//设置模板的读取目录，第一个参数是views 第二个参数是相对当前目录名称
app.set('views', './views');
//设置以html后缀的文件，第一个参数必须是view engine，第二个参数是解析html文件
app.set('view engine', 'html');

//路由分模块控制,app.use第一个参数是监控url,路由
app.use('/',require('./routes/main.js'));
//api接口的一些方法
app.use('/api',require('./routes/api.js'));

//后台管理接口
app.use('/admin',require('./routes/admin.js'))


/*
app.get('/', function (req, res, next) {
    //res.send('这是我的blog')
    // res.render('index',{
    //     title:'首页',
    //     content: '这是我的首页'
    // })
    res.render('index');
    console.log(__dirname)

});
*/
/*
独自请求css文件
app.get('/public/main.css', function (req, res) {
    res.setHeader("content-type", "text/css")
    res.send("body{background:red}")
});
*/
//监听http请求数据`openUri,数据库会以blog新建一个表
mongoose.connection.openUri("mongodb://localhost:5000/blog",function(error){
    if(error){
        console.log("连接数据库失败")
    }else{
        console.log("连接数据成功");
        var server = app.listen(config.port, function () {
            console.log('server is start at:' + config.port);
        })
    }
})

