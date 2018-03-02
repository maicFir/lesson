let webpack = require('webpack');
let defaults = require('./defaults');
let ExtractTextPlugin = require('extract-text-webpack-plugin');


let pluginsConfig = [
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: 'vendor.js'
	}),
	new webpack.DefinePlugin({
		'PROCESS_NODE_ENV': defaults.env
	})
];

if (defaults.env !== 'production') {
	pluginsConfig = pluginsConfig.concat([
		new webpack.HotModuleReplacementPlugin()
	])
} else {
	pluginsConfig = pluginsConfig.concat([
		new ExtractTextPlugin("[name].css"),
		// 压缩
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	])
}

module.exports = pluginsConfig;