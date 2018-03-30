const style = require("./css/style.css");//引入css
//引入jquery插件库
//const $ = require("jquery");//cmd方式
import $ from "jquery";//es6方式
import moment from "moment";

console.log(moment().format());
require.ensure([],function(require){
	require("./js/a.js").text;
})
$(function(){
	$(".header>li").on("click",function(){
		var index = $(this).index();
		var text = $(this).text();
		$(this).addClass("active").siblings().removeClass("active");
		$(".content").html(text)
	})
})
