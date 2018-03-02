let path = require('path');

let proxyPort = 8010;

module.exports = {
	browserSyncPort: 8000,
	defaultPort: 8005,
	proxyPort: proxyPort,
	proxyTarget: 'http://localhost:' + proxyPort,
	allowedEnvs: ['dev', 'production', 'test'],
	env: process.env.NODE_ENV,
	srcPath: path.join(__dirname, '/../src'),
	publicPath: '/dist/assets'
}