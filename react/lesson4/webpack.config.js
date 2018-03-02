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
			   test:/\.js$/,//匹配loades处理文件的后缀名
			   exclude:/node_modules/,//屏蔽不需要的文件夹
			   loader:'babel-loader',
			   query:{
				  presets:['es2015','react']	
			   }
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'//添加对样式表的处理
			},
			{
				test: /\.(png|jpg|gif|woff|woff2)$/,
	        	loader: 'url-loader?limit=8192'
	        },
	        {
				test: /\.styl/,
	        	loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!stylus-loader'
	       },
	       {
				test: /\.(png|jpg|gif|woff|woff2)$/,
	        	loader: 'url-loader?limit=8192'
	      }
		]
	},
	 devServer: {
		contentBase: "./public",//输出页面的首页
		colors: true,
		historyApiFallback: true,
		inline: true,//ture表示,热加载，保存就实时刷新
	 }
}