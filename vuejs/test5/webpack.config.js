let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');

console.log("dirname",path.join(__dirname,'/src/'))
module.exports = {
	entry: {
		'index': [path.join(__dirname, '/src/pages/index/index.js')],
	},
	output: {
	    path: path.join(__dirname, '/assets/dist'),//运行webapck -w 生成后的目录
		filename: '[name].js'//生成指定的文件目录文件名
	},
	module: {
	  	loaders: [
		  	{
		  	    test: /\.css$/,
		  	    exclude: /src\/libs/,
		  	    loader: ExtractTextPlugin.extract({ 
					fallback: 'style-loader', 
					use: ['css-loader','stylus-loader'] 
				})
		  	},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract({ 
					fallback: 'style-loader', 
					use: ['css-loader','postcss-loader','stylus-loader'] 
				})
			},
			{
			    test: /\.(png|jpg|gif|woff|woff2)$/,
			    loader: 'url-loader?limit=5000&name=img/[name]-[hash:6].[ext]'
			},
			{
			    test: /\.(mp4|ogg|svg)$/,
			    loader: 'file-loader?name=img/[name]-[hash:6].[ext]?'
			},
			{
                test: /\.vue$/,
                loader: 'vue-loader'//加载vue
            },
	  	]
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',//编译vue文件,
			"@default":path.join(__dirname,'/src/')
        }
	},
	//插件
	plugins: [
		new ExtractTextPlugin("[name].css"),
		// 压缩
		new webpack.optimize.UglifyJsPlugin(),//压缩js,
	
	],
	externals: {//这个配置，引入的jquery不会被编译在webpack中
		
	}

}