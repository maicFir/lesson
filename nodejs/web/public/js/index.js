
$(function () {
    /*返回顶部*/
    $(window).scroll(function () {
        var scrTop = $(window).scrollTop(); //获取滚动条距离顶部的距离
        var winHeight = $(window).height(); //获取窗口的高度
        if (scrTop > winHeight / 2) {
            $("#backTop").fadeIn(2000);
        } else {
            $("#backTop").stop(true, true).fadeOut(2000);
        }
    });
    $("#imgClick").on("click", function () {
        $(this).animate({
            "bottom": "600px"
        }, 30);
        $("body,html").animate({
            "scrollTop": "0px"
        }, 600)
    });
    //注册登录框
    $('[data-toggle="tooltip"]').tooltip();
    $("#acount").hover(function () {
        $("#other").css({
            transition: "all 1s ease",
            opacity: 1
        })
    }, function () {
        $("#other").css({
            transition: "all 1s ease",
            opacity: 0
        })
    });
    //音乐导航
    $(".navbar-nav").find("li>a").on("mouseover", function () {
        var $musicName = $(this).data("music");
        var $audio = $("<audio></audio>");
        $audio.get(0).src = "http://s8.qhimg.com/share/audio/piano1/" + $musicName + "4.mp3";
        $audio.get(0).play();
    });
    //导航音乐播放
    $(".navbar-nav").find("li>a").on("mouseout", function () {
        var $musicName = $(this).data("music");
        var $audio = $("<audio></audio>");//创建audio标签
        $audio.get(0).src = "http://s8.qhimg.com/share/audio/piano1/" + $musicName + "4.mp3";
        $audio.get(0).play();//get(0)jquery对象转换成js对象
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
$("#choose").on("click", function () {
    index++;
    if (index == 6) index = 1;
    $(".center").css({
        "background": "url('../../public/img/bg" + index + ".jpg') no-repeat top center",
        "background-size": "cover",
        "background-position": "0px 0px",
        "transition": "all 2s ease"
    });
});
//打开网页时自动播放
var audioDom = document.createElement("audio");
var bkDom = document.querySelector(".center");
var flag = false;
window.onload = function () {
    audioDom.src = "../../public/item/music/Mylove.mp3";//获取播放地址
    //audioDom.play();//播放
}
function playOrpause() {
    flag = !flag;
    if (flag) {
        audioDom.play()
    } else {
        audioDom.pause();
    }
};

var initData = {
    isLogoin: 0,//是否登录
    isActive:1,
    username: "admin",//用户名
    isAdmin: false,//是否是管理员
    isCache:false,//设置缓存
    userData:{}
}
var vm = new Vue({
    el: "#appmain",
    data: initData,
    mounted:function(){
       
    },
    methods: {
        //注册
        register: function () {
            var data = {
                registName: $("input[name='registName']").val(),
                setpassword: $("input[name='setpassword']").val(),
                repassword: $("input[name='repassword']").val(),
                email: $("input[name='email']").val()
            };
            $.ajax({
                type: 'POST',
                url: '/api/user/register',
                dataType: 'json',
                data: data,
                success: function (result) {
                    console.log(result)
                }
            })
            this.isActive = 0;
        },
        //登录
        login: function () {
            $.ajax({
                type: "post",
                url: '/api/user/login',
                dataType: 'json',
                data: {
                    username: $("input[name='username']").val(),
                    password: $("input[name='password']").val(),
                }
            }).then((res) => {
                if (res.success) {
                    $("#myModal").modal('hide');
                    this.isLogoin = res.code;
                    this.username = res.userLogin.registName;
                    this.isAdmin = res.userLogin.isAdmin;
                    var userData = {
                        username: res.userLogin.registName,
                        isAdmin: res.userLogin.isAdmin
                    }
                }
              this.setLocalStorage("userLogin",userData);
              this.isActive = 1;
              this.isLogoin = 1;
            });

        },
        setLocalStorage(keyName,data){
            if(window.localStorage){
               return  localStorage.setItem(keyName,JSON.stringify(data))
            }
        },
        getLocalStorage(keyName){
          if(window.localStorage){
              return localStorage.getItem(keyName)
          }  
        },
        removeLocalStorage(keyName){
            if(window.localStorage){
                localStorage.removeItem(keyName)
            }
        },
        //退出
        loutOut: function () {
            this.isLogoin = 0;
            this.isCache = false;
            this.removeLocalStorage("userLogin")
        }
    }
})
if(window.localStorage.length>0){
    var data = JSON.parse(window.localStorage.getItem('userLogin'));
    console.log(data)
    
    if(data.username == 'admin'&&data.isAdmin){
        initData.isAdmin = data.isAdmin;
        initData.isLogoin = 1;
    }


};