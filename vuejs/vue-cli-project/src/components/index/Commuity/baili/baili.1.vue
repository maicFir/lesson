<template>
  <div class="tv-container" id="tv-container">
     <nav-tab :list="getTabList" class="bailiTab"></nav-tab>
     <div class="scroll-list" style="margin:100px 0px 50px">
            <div id="js-pull-down" class="pull-down">

            </div>
            <div class="scroll-container" id="scroll-container">
                <!-- <panel :list="items" :type="type"></panel> -->
                <a :href="item.url" class="item" v-for="(item,idx) in items" :key="idx">
                     <div class="side">
                        <div class="pic">
                            <img :src="item.src">
                        </div>
                    </div> 
                    <div class="content">
                        <h3>{{item.title}}</h3>
                        <p><span class="date">{{item.date}}</span></p>
                    </div>
                </a>
            </div>
            <div id="js-pull-up" class="pull-up">
                <div>
                    <span class="icon icon-up">上拉加载</span>
                </div>
            </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
//import infiniteScroll from 'vue-infinite-scroll'
import VueScroller from "vue-scroller";
import $ from "jquery";
import navTab from "@/components/navTab/navTab";
import "@/styles/common.less";
import "./baili.less";
//Vue.use(infiniteScroll);

let page = 0;
let prepage = 10;
let firstLoaded = false;

Vue.use(VueScroller);
export default {
  name: "baili",
  components: {
    navTab
  },
  data() {
    return {
      msg: "百里玄策",
      type: "",
      page: 1,
      ajaxFlag: false,
      items: [],
      busy: true,
      hasNext: true, //下一页
      curpage: 0, //当前页
      parms: {
        page: 1
      },
     topdiv: $("#js-pull-down"),
     topy: 0,
     enablePullDown: false,
     haspullDown: false,
      //上拉加载部分-----------------------------------------
      bottomdiv: $("#js-pull-up"),
      bottomy: 0,
      enablePullUp: false,
      haspullUp: false
    };
  },
  mounted() {
    // this.type = window.location.hash.split('/')[2];
    // this.loadMore();
    //var topdiv = $("#js-pull-down");
    this.top = 1;
    this.bottom = 20;
    var self = this;
    this.loadPageData(true,true);
    var $cardbody = $(".scroll-list");
    var $window = $(window);

    // $window.scroll(function(e) {
    //   //div#card-body
    //   var $this = $(this);
    //   if (this.pageYOffset + this.innerHeight >document.body.scrollHeight - 50) {
    //     self.loadPageData(false, false);
    //   }
    // });
    //var cardbody = $("#scroll-container")[0];
    var cardbody = $('#scroll-container')[0];
    var bpagex = 0,
      bpagey = 0;
    cardbody.addEventListener("touchstart", function(e) {
      console.log(1111);
      var t = e.changedTouches[0];
      bpagey = t.pageY;
      self.setPullDownStart();
      self.setPullUpStart();
    });
    cardbody.addEventListener("touchmove", function(e) {
      console.log(22222);
      var t = e.changedTouches[0];
      var y = t.pageY - bpagey;
      var pyf = window.pageYOffset;
      var btom = document.body.scrollHeight - window.pageYOffset - window.innerHeight;
      if (pyf == 0 && y > 0) {
        //说明滑到顶，且向下滑动
        self.setPullDownY(y);
        e.stopPropagation();
        e.preventDefault();
      } else if (btom == 0 && y < 0) {
        self.setPullUpY(y);
        e.stopPropagation();
        //e.preventDefault();
      } else {
        bpagey = t.pageY;
      }
    });
    cardbody.addEventListener("touchend", function(e) {
      console.log(3333);
      self.setPullDownEnd();
      self.setPullUpEnd();
     
    });
  },
  computed: {
    getTabList() {
      return this.$store.getters.getTabList;
    }
  },

  methods: {
    loadPageData(isfirst, isreload, callback){
        this.reset(true,true);
        this.parms.page = this.curpage * 1 + 1;
        if(isfirst){
            this.ajax(this.parms.page);
        }
        
    },
    setPullDownStart() {
            if (!this.enablePullDown)
                return;
            $("#js-pull-down").addClass("noanimate");
            
            this.refreshState();
            this.haspullDown = false;
        },
        setPullDownY(y) {    //下拉加载
            if (!this.enablePullDown)
                return;
            this.topy = y / 2;
            $("#js-pull-down").css("height", this.topy + "px");
            this.haspullDown = true;
        },
        setPullDownEnd() {
            if (!this.enablePullDown || !this.haspullDown)
                return;
            $("#js-pull-down").removeClass("noanimate");
           
            if (this.topy > 40) {
                $("#js-pull-down").css("height", "40px");
                this.topy = 40;
                this.enablePullDown = false;
                this.reloadState();
                var _this = this;

                this.loadPageData(true, true, function (success) {
                    if (success) {
                        _this.reloadSuccessState();
                    } else {
                        _this.reloadErrorState();
                    }
                    setTimeout(function () {
                        _this.topy = 0;
                        $("#js-pull-down").css("height", "0px");
                        _this.enablePullDown = true;
                    }, 600);
                });
            } else {
                $("#js-pull-down").css("height", "0px");
                this.topy = 0;
            }
        },
        reloadSuccessState() {    //刷新成功
            $("#js-pull-down").html("<div><span class='icon icon-ok'>刷新成功</span></div>");
        },
        reloadErrorState() {  //刷新失败
            $("#js-pull-down").html("<div><span class='iconxx icon-error'>网络异常，请稍后再试！</span></div>");
        },
        refreshState() {    //设置成下拉刷新状态
            $("#js-pull-down").html("<div><span class='icon icon-down'>下拉刷新</span></div>");
        },
        reloadState() {    //设置成下拉刷新状态
            $("#js-pull-down").html("<div><span class='icon icon-refresh'>正在努力获取最新数据</span></div>");
        },
        setPullUpStart() {
            if (!this.enablePullUp)
                return;
            $("#js-pull-up").addClass("noanimate");
            this.setPullUpState();
            this.haspullUp = false;
        },
        setPullUpY(y) {    //下拉加载
           var $window = $(window);
            if (!this.enablePullUp)
                return;
            this.bottomy = -y / 2;
            $("#js-pull-up").css("height", this.bottomy + "px");
            $window.scrollTop($window.scrollTop() + 100);
            this.haspullUp = true;
        },
        setPullUpEnd() {
            if (!this.enablePullUp || !this.haspullUp)
                return;
            let self = this;
            $("#js-pull-up").removeClass("noanimate");
             
            if (this.bottomy > 40) {
                $("#js-pull-up").css("height", "40px");
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
                        $("#js-pull-up").css("height", "0px");
                        _this.enablePullUp = true;
                    }, 600);
                });
            } else {
                $("#js-pull-up").css("height", "0px");
                this.bottomy = 0;
            }
        },
        setPullUpState() {    //设置成下拉刷新状态
            $("#js-pull-up").html("<div><span class='icon icon-up'>上拉加载</span></div>");
        },
        setPUreloadState() {    //设置成下拉刷新状态
            $("#js-pull-up").html("<div><span class='icon icon-refresh'>正在载入请稍候</span></div>");
        },
        setPUEndState() {    //刷新成功
            $("#js-pull-up").html("<div><span class='iconxx icon-down'>已经到底啦</span></div>");
        },
        setPUSuccessState() {    //刷新成功
            $("#js-pull-up").html("<div><span class='iconxx icon-down'>加载成功</span></div>");
        },
        setPUErrorState() {  //刷新失败
            $("#js-pull-up").html("<div><span class='iconxx icon-error'>网络异常，请稍后再试！</span></div>");
        },
        reset(PDable, PUable) {
            PDable ? this.enablePullDown = true : this.enablePullDown = false;
            PUable ? this.enablePullUp = true : this.enablePullUp = false;
            $("#js-pull-down").css("height", "0px");
            $("#js-pull-up").css("height", "0px");
        },









    refresh() {
      this.parms.page = this.curpage * 1 + 1;
      this.parms.type = this.type;
      console.log(1111);
      this.ajax(this.parms);
    },
    ajax(parms) {
      parms = parms ? parms : {};
      if (!this.busy) {
        return;
      }
      $.ajax({
        type: "get",
        url: "/wzbd/competitive/list.do",
        data: parms
      }).then(res => {
        if (res.success) {
          for (let i = 0; i < res.data.length; i++) {
            this.items.unshift(res.data[i]);
          }

          this.hasNext = res.hashNext;
          this.curpage = res.curpage;
          this.busy = true;
        }
      });
    }
  }
};
</script>

<style scoped>
.tv-container {
  color: green;
}
</style>
