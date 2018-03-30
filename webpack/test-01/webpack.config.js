let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');

console.log(__dirname)
module.exports = {
	entry: {
		 'index': [path.join(__dirname, '/src/js/index')],//自定义输出的js的名字，index
	},
	// entry: __dirname+'/src/js/index',
	output: {
		path: path.join(__dirname, '/assets/dist'),
		filename: '[name].js',
	},
	module: {
	  	loaders: [
		  	{
		  	    test: /\.css$/,
		  	    exclude: /src\/libs/,
		  	    loader: "style-loader!css-loader"
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
				// test: /\.styl$/,
				// loader: "style-loader!css-loader"
			},
			{
			    test: /\.(png|jpg|gif|woff|woff2)$/,
			    loader: 'url-loader?limit=5000&name=img/[name]-[hash:6].[ext]'
			},
			{
			    test: /\.(mp4|ogg|svg)$/,
			    loader: 'file-loader?name=img/[name]-[hash:6].[ext]?'
			},
	  	]
	},
	resolve: {
		extensions: ['.js'],
	},
	//插件
	plugins: [
		new ExtractTextPlugin("[name].css"),//提取css
		
		new webpack.optimize.UglifyJsPlugin(),//压缩js
		//require('autoprefixer')
	],
	externals: {
		zepto: 'Zepto',
		swiper: 'Swiper',
		template: 'template',
	}
}