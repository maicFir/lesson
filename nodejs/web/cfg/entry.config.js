let path = require('path');
let defaults = require('./defaults');
let hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

let entry = {
	'index/index': ['./app.js'],
	vendor: [
		'react', 
		'react-dom', 
		'react-router-dom',
		'react-bootstrap',
		'moment'
	]
};

if (defaults.env !== 'production') {
	entry['index/index'].push(hotMiddlewareScript);
}

module.exports = entry;