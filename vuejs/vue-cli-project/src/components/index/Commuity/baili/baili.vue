<template>
  <div class="tv-container" id="tv-container">
     <nav-tab :list="getTabList" class="bailiTab"></nav-tab>
     <div class="scroll-list" style="margin:100px 0px 50px">

            <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
               <a :href="item.url" class="item" v-for="(item,idx) in listdata" :key="idx">
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
               <a :href="item.url" class="item" v-for="(item,idx) in downdata" :key="idx">
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
            </v-scroll>

    </div>
  </div>
</template>
<script>
import Vue from "vue";
import navTab from '@/components/navTab/navTab';
import Scroll from './component/scroller.vue';
import $ from "jquery";

import './baili.less'
export default {
  name: "baili",
  components: {
     'v-scroll': Scroll,
     'nav-tab':navTab
  },
  computed:{
  	  getTabList(){
  	 	  return this.$store.getters.getTabList
  	  }
  },
  data() {
    return {
      counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num : 15,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: [], // 上拉更多的数据存放数组
      busy: false,
      hasNext:true,//下一页
      curpage: 0,//当前页
      parms:{
          page:1
      },
      scrollData:{
		noFlag: false //暂无更多数据显示
	  }
    };
  },
  mounted() {
    this.getList();
      $(window).scroll(function (e) {//div#card-body
            if (this.pageYOffset + this.innerHeight > document.body.scrollHeight - 20) {
                console.log("=====")
            }
        });
  },
  methods:{
    getList(){
          $.ajax({
              type:'get',
              url:'/wzbd/competitive/list.do',
          }).then((res)=>{
              if(res.success){
                  this.listdata = res.data;
                  //this.listdata.splice(this.listdata.length,0,...res.data);
                  this.hasNext = res.hashNext;
                  this.curpage = res.curpage;
                  this.busy = false;
              }
          })
        //   $.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
        //            vm.listdata = response.data.slice(0,15);
        //          }, (response) => {
        //             console.log('error');
        //         });
    },
    onRefresh(callback) {
        this.getList();
        callback()
    },
    onInfinite(callback) {
        
            this.counter++;
            this.pageEnd = this.num * this.counter;
            this.pageStart = this.pageEnd - this.num;
            this.parms.page =  this.counter;
            let more = this.$el.querySelector('.load-more')
              $.ajax({
                  type:'get',
                  url:'/wzbd/competitive/list.do',
                  data:this.parms
              }).then((res)=>{
                  if(res.success){
                      this.downdata.push(...res.data);
                      this.hasNext = res.hashNext;
                      this.curpage = res.curpage;
                      this.scrollData.noFlag = true;
                  }
              })


            //   $.get('/wzbd/competitive/list.do').then((res) => {
            //       this.counter++;
            //       this.pageEnd = this.num * this.counter;
            //       this.pageStart = this.pageEnd - this.num;
            //       let arr = res.data;
            //       let i = this.pageStart;
            //       let end = this.pageEnd;
            //          for(; i<end; i++){
            //             this.downdata.push(res.data);
            //              if((i + 1) >= res.data.length){
            //               this.$el.querySelector('.load-more').style.display = 'none';
            //               return;
            //             }
            //         }
            //       callback()
            //        }, (response) => {
            //         console.log('error');
            //     });
           }
  },
  
};
</script>

<style>
    .yo-scroll {
  position: absolute;
  top: 2.5rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #ddd
}
.yo-scroll .inner {
  position: absolute;
  top: -2rem;
  width: 100%;
  transition-duration: 300ms;
}
.yo-scroll .pull-refresh {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.yo-scroll.touch .inner {
  transition-duration: 0ms;
}
.yo-scroll.down .down-tip {
  display: block;
}
.yo-scroll.up .up-tip {
  display: block;
}
.yo-scroll.refresh .refresh-tip {
  display: block;
}
.yo-scroll .down-tip,
.yo-scroll .refresh-tip,
.yo-scroll .up-tip {
  display: none;
}
.yo-scroll .load-more {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}  
</style>

