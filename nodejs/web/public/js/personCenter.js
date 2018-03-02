/*
 个人中心.css
 * */
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationType: 'progress',
	mousewheelControl: true,
	scrollbar: '.swiper-scrollbar',
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit

		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {

		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}

});

var cntDom = document.querySelector(".cnt");//获取内容
var cntH = cntDom.offsetHeight;//获取内容的高度
var winH = window.innerHeight;//屏幕的高度
var sH = winH - cntH + "px";
window.onload = function() {
	cntDom.style.marginBottom = sH;
}