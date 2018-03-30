const style = require("./css/style.css");//引入css
//引入jquery插件库
//const $ = require("jquery");//cmd方式
import $ from "jquery";//es6方式
import moment from "moment";

console.log(moment().format());
require.ensure([],function(require){
	var ret = require("./js/a.js").text;
	console.log(ret)
})

//获取canvans
const canvas = document.getElementById('canvas');
//获取上下文环境
const context = canvas.getContext('2d');

//设置宽度和高度
const w = canvas.width = 600;
const h = canvas.height = 500;



//构造小球对象

class Ball{
	constructor(x,y,r){
		this.x = x;//小球的x坐标
		this.y = y;//小球的y坐标
		this.r = r;//小球的半径
		this.bgColor = `rgb(${~~Ball.RandomColor([55,255])},${~~Ball.RandomColor([55,255])},${~~Ball.RandomColor([55,255])})`;
		
		return this;


	}
	render(ctx){
		ctx.strokeStyle = "#000";
		ctx.strokeRect(0,0,600,500);
		ctx.save();//保存当前环境
		ctx.translate(this.x,this.y);
		ctx.fillStyle = this.bgColor;
		ctx.beginPath();//重置当前路径
		ctx.arc(0,0,this.r,0,2*Math.PI);
		ctx.fill();//填充
		ctx.restore();//返回之前保存的路径
		return this;
	}

	//小球随机颜色
	static RandomColor(arr){
		let max = Math.max(...arr);
		let min = Math.min(...arr);
		return Math.random()*(max-min)+min
	}
}
//const ball = new Ball(100,100,30).render(context)

class SuperBall extends Ball{
	constructor(x,y,r){
		super(x,y,r);
		this.vy = SuperBall.RandomColor([2,6]);//速度
		this.g = SuperBall.RandomColor([0.2,0.4]);//重力加速度
		this.a = 0;
		return this;
	}
	//运动
	move(context){
		this.y+=this.vy;
		this.vy+=this.g;
		let current = this.vy*-0.75;
		if(this.y+this.r>=context.canvas.height){
			this.y = context.canvas.height - this.r;
			if(Math.abs(current - this.a)<0.01) return false;
			this.a = this.vy*=-0.75;
		}
		//清除画布
		context.clearRect(0,0,context.canvas.width,context.canvas.height);
		super.render(context);
		return true
	}
}

let ball,timer;
//点击画布创建小球
canvas.onclick = function(e){
	let x = e.offsetX;
	let y = e.offsetY;
	let r = 50;
	ball = new SuperBall(x,y,r).render(context);
	console.log(ball)
	ballMove()
}


function ballMove(){
	timer = window.requestAnimationFrame(ballMove);
	if(!ball.move(context)){
		window.cancelAnimationFrame(timer);
	}
}





$(function(){
	$(".header>li").on("click",function(){
		var index = $(this).index();
		var text = $(this).text();
		$(this).addClass("active").siblings().removeClass("active");
		$(".content").html(text)
	})
})
