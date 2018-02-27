import $ from 'jquery';



var PullState = {
    topdiv: $("#js-pull-down"),
    topy: 0,
    enablePullDown: false,
    haspullDown: false,
    setPullDownStart: function () {
        if (!this.enablePullDown)
            return;
        this.topdiv.addClass("noanimate");
        this.refreshState();
        this.haspullDown = false;
    },
    setPullDownY: function (y) {    //下拉加载
        if (!this.enablePullDown)
            return;
        this.topy = y / 2;
        this.topdiv.css("height", this.topy + "px");
        this.haspullDown = true;
    },
    setPullDownEnd: function () {
        if (!this.enablePullDown || !this.haspullDown)
            return;
        this.topdiv.removeClass("noanimate");
        if (this.topy > 40) {
            this.topdiv.css("height", "40px");
            this.topy = 40;
            this.enablePullDown = false;
            this.reloadState();
            var _this = this;

            loadPageData(true, true, function (success) {
                if (success) {
                    _this.reloadSuccessState();
                } else {
                    _this.reloadErrorState();
                }
                setTimeout(function () {
                    _this.topy = 0;
                    _this.topdiv.css("height", "0px");
                    _this.enablePullDown = true;
                }, 600);
            });
        } else {
            this.topdiv.css("height", "0px");
            this.topy = 0;
        }
    },
    reloadSuccessState: function () {    //刷新成功
        this.topdiv.html("<div><span class='icon icon-ok'>刷新成功</span></div>");
    },
    reloadErrorState: function () {  //刷新失败
        this.topdiv.html("<div><span class='iconxx icon-error'>网络异常，请稍后再试！</span></div>");
    },
    refreshState: function () {    //设置成下拉刷新状态
        this.topdiv.html("<div><span class='icon icon-down'>下拉刷新</span></div>");
    },
    reloadState: function () {    //设置成下拉刷新状态
        this.topdiv.html("<div><span class='icon icon-refresh'>正在努力获取最新数据</span></div>");
    },


    //上拉加载部分-----------------------------------------
    bottomdiv: $("#js-pull-up"),
    bottomy: 0,
    enablePullUp: false,
    haspullUp: false,
    setPullUpStart: function () {
        if (!this.enablePullUp)
            return;
        this.bottomdiv.addClass("noanimate");
        this.setPullUpState();
        this.haspullUp = false;
    },
    setPullUpY: function (y) {    //下拉加载
        if (!this.enablePullUp)
            return;
        this.bottomy = -y / 2;
        this.bottomdiv.css("height", this.bottomy + "px");
        $window.scrollTop($window.scrollTop() + 100);
        this.haspullUp = true;
    },
    setPullUpEnd: function () {
        if (!this.enablePullUp || !this.haspullUp)
            return;
        this.bottomdiv.removeClass("noanimate");
        if (this.bottomy > 40) {
            this.bottomdiv.css("height", "40px");
            this.bottomy = 40;
            this.enablePullUp = false;
            this.setPUreloadState();
            var _this = this;

            loadPageData(false, false, function (success, isend) {
                if (success) {
                    if (isend) {
                        _this.setPUEndState();
                    } else {
                        _this.setPUSuccessState();
                    }
                } else {
                    _this.setPUErrorState();
                }
                setTimeout(function () {
                    _this.bottomy = 0;
                    _this.bottomdiv.css("height", "0px");
                    _this.enablePullUp = true;
                }, 600);
            });
        } else {
            this.bottomdiv.css("height", "0px");
            this.bottomy = 0;
        }
    },
    setPullUpState: function () {    //设置成下拉刷新状态
        this.bottomdiv.html("<div><span class='icon icon-up'>上拉加载</span></div>");
    },
    setPUreloadState: function () {    //设置成下拉刷新状态
        this.bottomdiv.html("<div><span class='icon icon-refresh'>正在载入请稍候</span></div>");
    },
    setPUEndState: function () {    //刷新成功
        this.bottomdiv.html("<div><span class='iconxx icon-down'>已经到底啦</span></div>");
    },
    setPUSuccessState: function () {    //刷新成功
        this.bottomdiv.html("<div><span class='iconxx icon-down'>加载成功</span></div>");
    },
    setPUErrorState: function () {  //刷新失败
        this.bottomdiv.html("<div><span class='iconxx icon-error'>网络异常，请稍后再试！</span></div>");
    },

    reset: function (PDable, PUable) {
        PDable ? this.enablePullDown = true : this.enablePullDown = false;
        PUable ? this.enablePullUp = true : this.enablePullUp = false;
        this.topdiv.css("height", "0px");
        this.bottomdiv.css("height", "0px");
    }
}


var $cardbody = $(".scroll-list");
var $cardcontent = $(".scroll-container");
var ajaxdata = {
    type: "news",
    appId: "1",
    parent_id: "1",
    ajaxing: false
}
function loadPageData(isfirst, isreload, callback){
    var thisdata = ajaxdata;
    
}


var $window = $(window);
$window.scroll(function (e) {//div#card-body
    //console.log(e)
    var $this = $(this);
    //var pyf = window.pageYOffset;
    //PullState.scrollPullDownY(pyf);
    // if (ajaxdata.type == "fun") {
    //     if (this.pageYOffset + this.innerHeight > document.body.scrollHeight - 50) {
    //         loadPageData(false, false);
    //     }
    // }
    if (this.pageYOffset + this.innerHeight > document.body.scrollHeight - 50) {
        loadPageData(false, false);
    }


});
var cardbody = $(".scroll-container");
var bpagex = 0, bpagey = 0;
cardbody.addEventListener("touchstart", function (e) {
    var t = e.changedTouches[0];
    bpagey = t.pageY;
    PullState.setPullDownStart();
    PullState.setPullUpStart();
});
cardbody.addEventListener("touchmove", function (e) {
    var t = e.changedTouches[0];
    var y = t.pageY - bpagey;
    var pyf = window.pageYOffset;
    var btom = document.body.scrollHeight - window.pageYOffset - window.innerHeight;
    if (pyf == 0 && y > 0) {    //说明滑到顶，且向下滑动
        PullState.setPullDownY(y);
        e.stopPropagation();
        e.preventDefault();
    } else if (btom == 0 && y < 0) {
        PullState.setPullUpY(y);
        e.stopPropagation();
        e.preventDefault();
    } else {
        bpagey = t.pageY;
    }
});
cardbody.addEventListener("touchend", function (e) {
    PullState.setPullDownEnd();
    PullState.setPullUpEnd();
});

