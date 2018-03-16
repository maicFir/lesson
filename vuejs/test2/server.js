let path = require('path');
let express = require("express");
let webpack = require('webpack');


let app = express();
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let webpackConfig = require('./webpack.config.js');


let complier = webpack(webpackConfig);
let port = 9000;
app.use(express.static(__dirname))

app.use(webpackDevMiddleware(complier,{
	// publicPath: webpackConfig.output.path,
	publicPath: '/assets/dist',//这里设置共用访问路径
	quiet: false
}))
//热加载
app.use(webpackHotMiddleware);

app.listen(port,function(){
	console.log("server is start at "+ port);
})

