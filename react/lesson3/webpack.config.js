module.exports = {
	entry:__dirname+"/app/main.js",
	output:{
		path:__dirname+"/public",//打包后的文件
		filename:"build.js"//打包输出后的文件名
	},
	module:{
		loaders:[
		   {
			 test:/\.json$/,
			 loader:"json"
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
		]
	},
	 devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true
	 }
}