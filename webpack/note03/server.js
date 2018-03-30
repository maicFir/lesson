let path = require('path');
let	express = require('express');
let	proxyMiddleware = require('http-proxy-middleware');

let app = express();
// app.use(express.static(path.join(__dirname, './')));

app.use('/my-paoject', proxyMiddleware({target: 'http://localhost:2000', changeOrigin: true}))
	

