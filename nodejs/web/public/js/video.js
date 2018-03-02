$(function() {
		/*返回顶部*/
		$(window).scroll(function() {
			var scrTop = $(window).scrollTop(); //获取滚动条距离顶部的距离
			var winHeight = $(window).height(); //获取窗口的高度
			if (scrTop > winHeight / 2) {
				$("#backTop").fadeIn(2000);
			} else {
				$("#backTop").stop(true, true).fadeOut(2000);
			}
		});
		$("#imgClick").on("click", function() {
			$(this).animate({
				"bottom": "600px"
			}, 30);
			$("body,html").animate({
				"scrollTop": "0px"
			}, 600)
		});
		//注册登录框
		$('[data-toggle="tooltip"]').tooltip();
		$("#acount").hover(function() {
			$("#other").css({
				transition: "all 1s ease",
				opacity: 1
			})
		}, function() {
			$("#other").css({
				transition: "all 1s ease",
				opacity: 0
			})
		});
	})
		//改变字体颜色
		//			var geText = document.querySelector(".blog");
		//			var textDom = geText.innerText || getText.textContent; //获取文本
		//			setInterval(function() {
		//					geText.style.color = randomColor();
		//			}, 2000)
		//随机颜色
	function randomColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + "," + g + "," + b + ")";
	}
	//切换皮肤
	var index = 0;
	var $width = $(window).minWidth + "px";
	$("#choose").on("click", function() {
		index++;
		if (index == 6) index = 1;
		$(".center").css({
			"background": "url('wmc_blog/img/bg" + index + ".jpg') no-repeat top center",
			"background-size": "cover",
			"background-position": "0px 0px",
			"transition": "all 2s ease"
		});
	});
	//打开网页时自动播放
	var audioDom = document.createElement("audio");
	var bkDom = document.querySelector(".center");
	var flag = false;
	window.onload = function(){
		audioDom.src="wmc_blog/item/music/Mylove.mp3";//获取播放地址
		audioDom.play();//播放
	}
	function playOrpause(){
		flag = !flag;
		if(flag){
			audioDom.play()
		}else{
			audioDom.pause();
		}
	}