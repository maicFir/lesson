module.exports = {
	entry:__dirname+"/src/app.js",//入口文件
	output:{
		path:__dirname+"/public",//打包后的文件
		filename:"build.js"//打包输出后的文件名
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
			  test:/\.css$/,
			  //loader:"style-loader!css-loader?modules"
			  //loader: "style-loader!css-loader?modules&localIdentName=[path]-[hash:base64:5]"
			  loader: "style-loader!css-loader"
			},
			{
				test: /\.styl/,
	        	loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!stylus-loader'//.styl后缀的css会生成一连串随机字符串
	      	},
	      	{
				test: /\.(png|jpg|gif|woff|woff2)$/,
	        	loader: 'url-loader?limit=8192'//css中加载图片使用的插件，url-loader,同时css引用资源要用file-loader这个插件
	      	}
		]
	}
}