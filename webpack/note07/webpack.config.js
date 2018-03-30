const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack');
const path = require('path');
const config = {
	// entry:__dirname+"/src/main.js",//入口文件
	entry:{
		app:"./src/main.js",
		//vendor:['moment']
	},
	output:{
		filename:"[name].js",//打包输出后的文件名
		//path:__dirname+"/public"//打包后的文件
		path:path.resolve(__dirname,"public")
		
	},
	resolve:{
		alias:{
			
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
	 devServer: {
		contentBase: "./public",//设置进入public路径下的index.html页面,
		historyApiFallback: true,
		inline: true,//开启热加载
		port: "http://localhost:7000",//热加载开启请求端口设置
		proxy: {//设置跨域
			'/uscenter/*': {
				target: 'http://localhost:1000',//这个配置端口，利用express模拟端口数据解决跨域问题
				secure: false
			}
		}
	 },
	 plugins:[
	 	 //new webpack.optimize.UglifyJsPlugin(),压缩对应的js
	 	 new HtmlWebpackPlugin({template: './public/index.html'}),//会将entry中的app,moment.js引入index.html中
	 	 new webpack.optimize.CommonsChunkPlugin({
	 	 	name: 'vendor',
	 	 	minChunks:function(module){//会将moment合并到vendor中
	 	 		return module.context&&module.context.indexOf('node_modules')!==-1;
	 	 	}
	 	 })
	 ]
}
module.exports = config;