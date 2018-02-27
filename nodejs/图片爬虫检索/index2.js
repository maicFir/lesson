var request = require('request');//依赖request爬去网页内容
var http = require("http");//依赖http,创建服务
var fs = require('fs');//文件读取写
var url = 'https://github.com';
var html = "";

function callBack(error,res,body){
	//console.log('error:', error); // Print the error if one occurred
  	//console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
  	//console.log('body:', body); // Print the HTML for the Google homepage.
  	return body;
}
function getHtml() {
	// body...
	request(url,function(error,res,body){
		console.log(error);
		console.dir('res',res)
		console.log('statusCode',res&&res.statusCode);
		html = body;
	});
	return html
}
//将文件读取放置本地中
function getImage(){
	  request.get('https://assets-cdn.github.com/images/modules/site/universe-octoshop.png')
		.on('error',function(err){
			console.log('error:',err);
		}).on('response',function(res){
			console.log('Content-Type:',res.headers['content-type']);//image/png
		}).pipe(fs.createWriteStream('1.png'));//将文件读取放置本地
}
//获取json文件
function getJson(){
	fs.createReadStream('pshop.json').pipe(request.put('https://t-mcenter.gionee.com/ucsadm/pshop/list.do?page=1&rows=10&type=-1'))
}
var r = request.defaults({
	'proxy':'http://localhost:8002/'
});


function CreateHttp(){
	//创建服务
	http.createServer(function(req,res){
		res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
		getImage();
		getJson()
		res.end(getHtml());
		console.log('url:'+req.url);

		// if(req.url == '/image/1.png'){
		// 	console.log("xixi")
		// 	if(req.method == 'PUT'){
		// 		req.pipe(request.put('https://assets-cdn.github.com/images/modules/site/universe-octoshop.png'))
		// 	}else if(req.method === 'GET' || req.method === 'HEAD'){
		// 		request.get('https://assets-cdn.github.com/images/modules/site/universe-octoshop.png').pipe(res)
		// 	}
		// }
		if(true){
			console.log("===haha===")
			fs.createReadStream('pshop.json').pipe(request.put('https://t-mcenter.gionee.com/ucsadm/pshop/list.do?page=1&rows=10&type=-1'))
			// r.get('https://assets-cdn.github.com/images/modules/site/universe-octoshop.png').pipe(res)
		}


	}).listen(8002)
}
CreateHttp();
// request.post({url:"http://localhost:8002/",formData:formData},function(err,httpResPonse,body){
// 	if(err){
// 		return  console.error('upload failed:', err)
// 	}
// 	console.log('Upload successful!  Server responded with:', body);
// })