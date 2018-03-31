
const path = require("path");

const express = require("express");
const webpack = require("webpack");
let webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();

const port = 8012;

app.use(express.static(path.join(__dirname, './')));
let complier = webpack(require('./webpack.config.js'));

app.use(webpackDevMiddleware(complier,{
	
	publicPath: '/assets/dist',//这里设置共用访问路径
}))
app.listen(port,function(){
	console.log('server is now runing on '+port);
})