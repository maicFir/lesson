
const path = require("path");
let proxy  = require('http-proxy-middleware');
const express = require("express");
const webpack = require("webpack");
let webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();

const config = require("./config/config.js");
const port = 8012;

app.use(express.static(path.join(__dirname, './')));
let complier = webpack(require('./webpack.config.js'));

app.use(webpackDevMiddleware(complier,{
	
	publicPath: config.publicPath,//这里设置共用访问路径
}))

//代理跨域设置
app.use('/test',proxy({
    target: "http://localhost:8011/",
    changeOrigin: true
}))
app.listen(config.defaultPort,function(){
	console.log('server is now runing on '+config.defaultPort);
})

