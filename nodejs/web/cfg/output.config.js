let defaults = require('./defaults');
let path = require('path');

module.exports = {
	path: path.join(__dirname, '/../dist/assets'),
	filename: '[name].js',
	publicPath: defaults.publicPath
}