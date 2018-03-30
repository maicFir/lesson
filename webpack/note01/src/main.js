const style = require("./css/style.css");//引入css
//引入jquery插件库
//const $ = require("jquery");//cmd方式
import $ from "jquery";//es6方式

class A{
	constructor(a,b){
		this.a = a;
		this.b = b;
		return this;
	}
	say(){
		console.log(this.a,this.b)
	}
}
var a = new A('hello','world').say();

console.log(typeof A,A.prototype);

console.dir(Object.keys(A.prototype));
var bb = "red"
var html = `<div>
	<p class="${"text"}">hello world</p>
</div>`;

document.getElementById('temple').innerHTML = html



var str = 'a'
console.log(str.repeat(2))


var fn = function(a,b){
	a = a||10;
	b = b||20;
	console.log(a+b)
}
fn(1,2);

function sum(){
	let res=0;
	for(let i=0;i<arguments.length;i++){
		res+=arguments[i]
	}
	return res
}
console.log("sum="+`${sum(1,2,3,4)}`+"");

function sum2(...arr){
	let res=0;
	for(let i=0;i<arr.length;i++){
		res+=arr[i]
	}
	return res
}
console.log("sum2="+`${sum2(3,4)}`+"");

function sum3(a,b){
	a = a||2;
	b = b||1;
	console.log("a+b=",a+b)
}
sum3(1,3)

let sum4 = (a,b)=>{
	a = a||2;
	b = b||3;
	console.log('a+b=='+`${a+b}`+'')
}
sum4();

function fns(){
	setTimeout((a,b)=>{
		console.log(this)
		let sum = this.a+this.b
		console.log('fns='+sum)
		return sum;
	},20)
}
var obj = {a:1,b:2};
fns.call(obj)


$(function(){
	$(".header>li").on("click",function(){
		var index = $(this).index();
		var text = $(this).text();
		$(this).addClass("active").siblings().removeClass("active");
		$(".content").html(text);
		$.ajax({
			type:'get',
			url: '/my-paoject/competitive/list.do',
			success:function (result) {
				console.log(result)
			}
		})
	})
})
