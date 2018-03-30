let express = require('express');
let app = express();
var proxyMiddleware = require('http-proxy-middleware')
app.use(express.static(__dirname))


app.use('/my-paoject/*', proxyMiddleware({target: 'http://localhost:5000', changeOrigin: true }));


app.use('/my-paoject/competitive', require('./competitive'));


// let server = app.listen(8011, () => {
// 	console.log('app mcokjs listening at http://localhost:8011')
// })