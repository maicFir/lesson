var tipObj = {};
tipObj.toast = function(title, message) {
	var titleStr = "";
	if(message) {
		titleStr = "<span class='title-toast'>" + message + "</span>"
	};
	var strhtml = "<div class='mc-prop-toast'>" + titleStr + "<span>" + title + "</span></div>";
	var toastDom = $(strhtml);
	$(".modal-dialog").append(toastDom);

	setTimeout(function() {
		toastDom.css("opacity", 0);
	}, 2000);
	setTimeout(function() {
		toastDom.remove();
	}, 4000)

};
var regInfo = {
	//注册
	register: function(obj) {
		var type = 1;
		var userInfo = {
			user: obj.user.value,
			email: obj.email.value,
			passwords: obj.passwords.value,
			code: obj.code.value
		};
		//缓存
		this.cacheData(userInfo, type);
	},

	//登陆
	login: function(obj) {
		var type = 2;
		var loginInfo = {
			phoneName: obj.phone.value,
			//									yanCode:obj.yan-code.value
		};
		this.cacheData(loginInfo, type);
	},
	//获取缓存
	cacheData: function(userDate, num) {
		var user1 = null,
			user2 = null;
		if(userDate != "" && num == 1) {
			user1 = userDate;
		};
		if(userDate != "" && num == 2) {
			user2 = userDate;
		};
		if(window.localStorage) {
			if(num == 1) {
				window.localStorage.setItem("user", JSON.stringify(user1));
			} else if(num == 2) {
				window.localStorage.setItem("login", JSON.stringify(user2))
			}
		}
	},
	loadUser: function() {
		if(localStorage) {
			var jData = JSON.parse(window.localStorage.getItem("user"));
			var sData = JSON.parse(window.localStorage.getItem("login"));
			//									console.log(jData);

			if(jData) {
				$("input[name='user']").val(jData.user);
				$("input[name='email']").val(jData.email);
				$("input[name='passwords']").val(jData.passwords);
				$("input[name='code']").val(jData.code);
			}
			if(sData) {
				$('input[name="phone"]').val(sData.phoneName);
			}

		}
	},
	getFocusUser: function() {
		//用户名
		$("input[name='user']").focus(function() {
			var userStr = $(this).val();
			userStr.trim();
			if(userStr == "") {
				tipObj.toast("请输入用户名");
				//$(".tip-show").html("请输入用户名").attr("style","color:green;");
			};

		});
		//邮箱
		$("input[name='email']").focus(function() {
			var emailStr = $(this).val();
			emailStr.trim();
			if(emailStr == "") {
				tipObj.toast("请输入邮箱");
			}
		})

	},
	getBlurUser: function() {
		$("input[name='user']").blur(function() {
			var userStr = $(this).val();
			userStr.trim();
			if(userStr == "") {
				tipObj.toast("用户名不能为空")
					//$(".tip-show").html("用户名不能为空").attr("style","color:red");
			};
			var regName = /[a-z0-9_]{5,8}/g; //用户名限制字母数字5-8个长度
			if(userStr != "" && userStr.match(regName)) {
				//$(".tip-show").html("用户名输入正确").attr("style","color:green");
				tipObj.toast("用户名输入正确");
			} else {
				tipObj.toast("请以输入数字字母下划线开头，5-8位")
					//$(".tip-show").html("请以输入数字字母下划线开头，5-8位").attr("style","color:red");	
			}
		});
		$("input[name='email']").blur(function() {
			var emailStr = $(this).val();
			
			//									var reg = /^[a-z1-9_+]@[1-9]{2,3}.[a-z]{2,3}$/g; 
			var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
			if(emailStr == "") {
				tipObj.toast("您输入的邮箱不能为空");
			}else if(reg.test(emailStr)) {
				tipObj.toast("您输入的邮箱有误，请正确输入邮箱");
			}
		})

	},
	timeCount: function(obj) {
		var wait = 10,timer= null;//定时10s钟
		count(obj);
		function count(obj){
			if(wait == 0){
				obj.removeAttribute("disabled");//移除disabled
				obj.value = "获取验证码";
				wait = 10;
				//clearInterval(timer);
			}else{
				wait--;
				obj.setAttribute("disabled",true);//设置倒计时状态时，不可点击
				obj.value = "倒计时("+wait+")秒";
				timer = setTimeout(function(){
					count(obj);
				},1000)
			};
		};	
	}

};
regInfo.loadUser();
regInfo.getFocusUser();
regInfo.getBlurUser();