const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack');
const path = require('path');
const config = {
	// entry:__dirname+"/src/main.js",//入口文件
	entry:{
		app:"./src/main.js"
	},
	output:{
		filename:"[name].js",//打包输出后的文件名
		path:__dirname+"/public"//打包后的文件
		
	},
	devServer: {
		contentBase: './',
		port: 5000,
		noInfo: false,
		proxy: {
			'/api/*': {
				target: 'http://localhost:1000',
				secure: false
			}
		}
	},
	module:{
		loaders:[
		   {
			 test:/\.json$/,
			 loader: "json-loader",//这里必须是json-loader(加载json数据使用)
			},
			{
			   test:/\.js$/,
			   exclude:/node_modules/,
			   loader:'babel-loader',//能使用es6
			   query:{
				  presets:['es2015','react',"stage-0"]	
			   }
			},
			{
	       		 test: /\.(js|jsx)$/,
	        	 loader: 'babel-loader'
      		},
			{
			  test:/\.css$/,
			  //loader:"style-loader!css-loader?modules"
			  //loader: "style-loader!css-loader?modules&localIdentName=[path]-[hash:base64:5]"
			  loader: "style-loader!css-loader"
			},
			{
				test: /\.styl/,
	        	loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!stylus-loader'
	      	},
	      	{
				test: /\.(png|jpg|gif|woff|woff2)$/,
	        	loader: 'url-loader?limit=8192'//css中加载图片使用的插件，url-loader,同时css引用资源要用file-loader这个插件
	      	}
		]
	},
	 plugins:[
	 	 //new webpack.optimize.UglifyJsPlugin(),压缩对应的js
	 	 new HtmlWebpackPlugin({template: './public/index.html'})
	 ]
}
module.exports = config;