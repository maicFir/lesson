var nodegrass = require('nodegrass');
var html = "";
nodegrass.get("http://www.18183.com/yxzjol/?soucre=bdald",function(data,status,headers){
	console.log(status);
	console.log(headers.server);
	html = data;
},null,'utf8').on('error', function(e) {
    console.log("Got error: " + e.message);
});

//download file
var nodegrass = require('nodegrass');
nodegrass.getFile('http://img.hb.aicdn.com/79168ce4d84c654cd826e4eabad0b35ec8ee7064d7723-tDLgvm_fw658','F:/ccc/1.jpg',function(e){
	if(e){
		console.log(e);
	}
	console.log('download success!');
});

var http = require("http");//依赖http
//创建服务
http.createServer(function(req,res){
	res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
	res.end(html)
}).listen(8001)