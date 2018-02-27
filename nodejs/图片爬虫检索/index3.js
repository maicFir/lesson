var request = require('request');//依赖request爬去网页内容
var http = require("http");//依赖http,创建服务
var fs = require('fs');//文件读取写
var fetch = require('node-fetch');
var FormData  = require('form-data');

http.createServer(function(req,res){
	res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
	fetch('https://api.github.com/users/github')
    .then(function(res) {
        const jsonData = fs.createWriteStream('pshop.json');
        res.body.pipe(jsonData);
        return res.json() 
    }).then(function(json) {
        console.log(json);
    });
    //请求另一个网页端口的内容
    fetch('http://www.18183.com/yxzjol/?soucre=bdald').then(
    		resd=>resd.text()//获取文本内容
    	).then(body=>res.end(body));//将文本内容输出到网页上
    //将爬去的网页克隆复制成本地的html
    fetch('http://www.18183.com/yxzjol/?soucre=bdald').then(function(res){
    	res.body.pipe(fs.createWriteStream('my-test.html'));//将请求的html输出到本地文件中
    })
		
}).listen(8003)