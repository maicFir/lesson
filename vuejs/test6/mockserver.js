let express = require("express");
let app = express();
let config = require("./config/config.js");


app.use('/test',require("./mock/tuijian.js"));


app.listen(config.proxyPort,function(){
    console.log("mockjs is start,"+config.proxyPort);
})