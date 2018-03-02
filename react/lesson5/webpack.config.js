module.exports = {
	entry:__dirname+"/src/app.js",
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
			   loader:'babel-loader',
			   query:{
				  presets:['es2015','react']	
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
	        	loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!stylus-loader'
	      	},
	      	{
				test: /\.(png|jpg|gif|woff|woff2)$/,
	        	loader: 'url-loader?limit=8192'//css中加载图片使用的插件，url-loader
	      	}
		]
	},
	 devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true,
		port: "http://localhost:2000",//请求端口设置
		proxy: {//设置跨域
			'/uscenter/*': {
				target: 'http://localhost:1000',
				secure: false
			}
		}
	 }
}