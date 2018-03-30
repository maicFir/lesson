var path = require('path')
var express = require('express')
var proxyMiddleware = require('http-proxy-middleware')

var app = express();
app.use(express.static(path.join(__dirname, './')));

// app.use('/my-paoject', proxyMiddleware({target: 'http://localhost:8081', changeOrigin: true }));
app.use('/api', proxyMiddleware({target: 'http://localhost:5000', changeOrigin: true }));

var server = app.listen('7000',function(){
	console.log('server is start on port 7000')
});