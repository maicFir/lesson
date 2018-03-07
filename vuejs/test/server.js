const path = require("path");

const express = require("express");

const app = express();

const port = 8011;

app.use(express.static(path.join(__dirname, './')));

app.listen(port,function(){
	console.log('server is now runing on '+port);
})