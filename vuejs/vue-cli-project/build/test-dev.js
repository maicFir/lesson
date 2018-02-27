var path = require('path')
var express = require('express')
var proxyMiddleware = require('http-proxy-middleware')

var app = express();
// app.use(express.static(path.join(__dirname, '../')));

// app.use('/my-paoject', proxyMiddleware({target: 'http://localhost:8081', changeOrigin: true }));
// app.use('/api', proxyMiddleware({target: 'http://localhost:8081', changeOrigin: true }));

var server = app.listen('8083');