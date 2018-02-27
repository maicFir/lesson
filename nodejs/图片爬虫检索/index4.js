

var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");
var url = "http://www.18183.com/yxzjol/?soucre=bdald";
 // var url = "http://www.ivsky.com/";
  // var url = "http://www.wmcweb.cn/blog/index.php";
  // var host = "http://www.wmcweb.cn/blog/";
function download ( url,callback ) {
    http.get( url,function(res){
        var data = "";
        res.on("data",function(chunk){
            data += chunk;
        });
        //获取网页内容
        res.on("end",function(){
            callback(data)
        })
    }).on("error",function(err){
        console.log(err)
    })
}
download( url,function( data ) {
    if(data){
    		//console.log(data)
	        var $=cheerio.load(data);
	        //console.log($("img").length)
	        //获取图片
	        $("img").each(function(i,elem){
	            var imgSrc=$(this).attr("src");
	            if(/data:image\/png/.test(imgSrc)){
	            	return;
	            }else{
	            	if(imgSrc){
	            		if(imgSrc.indexOf("http:")>-1){
	            			 //console.log("imgSrc-----"+imgSrc)
	            			getContent(imgSrc)
		            	}else{
		            		//console.log("imgSrc====="+imgSrc);
		            		imgSrc = "http:"+imgSrc;
		            		getContent(imgSrc);
		            	}
	            	}
	            		
	            }
	        })
	        var aLinkArr = [];
	        var result = []
	        //获取a链接
	        $("a").each(function(index,item){
	        	aLinkArr.push($(this).attr("href"));
	        })
	        console.log(aLinkArr)

    	}
	});


function getContent(imgurl){
	http.get(imgurl,function(res){
		var imgData="";
        res.setEncoding("binary");
        res.on("data",function(chunk){
            imgData += chunk;
        });
    
        res.on("end",function(){
        	var arr = imgurl.split("/");
        	var name = arr[arr.length-1]
            var imgPath="/"+name;
            fs.writeFile(__dirname + "/image"+imgPath,imgData,"binary",function(err){
            })
        })
	 })
}
http.createServer(function(req,res){
	res.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
		
}).listen(8005)