let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');

module.exports = {
	entry: {
		'index': [path.join(__dirname, '/src/js/index')]
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
                loader: 'vue-loader'
            },
	  	]
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
	},
	//插件
	plugins: [
		new ExtractTextPlugin("[name].css"),
		// 压缩
		new webpack.optimize.UglifyJsPlugin(),
		require('autoprefixer')
	],
	externals: {
		zepto: 'Zepto',
		swiper: 'Swiper',
		template: 'template',
	}
}