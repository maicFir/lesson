<template>
  <div class="commuity-box">
   
       <nav-tab :list="getTabList" class="mainTab"></nav-tab>
       <div class="swiper-container" style="margin-top:100px;">
            <swiper loop auto :aspect-ratio="300/800">
                <swiper-item  class="swiper-demo-img" v-for="(item, index) in getlistData" :key="index">
                    <img :src="item.img" width="100%" height="120">
                </swiper-item>
            </swiper>
        </div>
  
   
    <div class="scroll-list" style="margin-bottom:50px;">
        <div class="scroll-container"  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
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
    </div>
    
    
  </div>
</template>

<script>
import Vue from 'vue';
import {Swiper, SwiperItem,Panel} from 'vux';
import VueScroller from 'vue-scroller';
import infiniteScroll from 'vue-infinite-scroll'
import $ from 'jquery';
import navTab from '@/components/navTab/navTab';
import "@/styles/common.less";
import './main.less';

Vue.use(infiniteScroll)
export default {
  name: 'main',
  components:{
  	Swiper,
    SwiperItem,
    navTab,
    Panel
  },
  data(){
  	return {
      type:'',
      page: 1,
      ajaxFlag: false,
      list:[
            // {
            //     src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            //     fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            //     title: '标题一',
            //     desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            //     url: '/component/cell'
            // }, 
            // {
            //     src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            //     title: '标题二',
            //     desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            //     url: {
            //       path: '/component/radio',
            //       replace: false
            //     },
            //     meta: {
            //       source: '来源信息',
            //       date: '时间',
            //       other: '其他信息'
            //     }
            // }
      ],
      items:[],
      busy: false,
      hasNext:true,//下一页
      curpage: 0,//当前页
      parms:{
          page:1
      }
  	}
  },
  mounted(){
    this.type = window.location.hash.split('/')[2];
    this.loadMore();
  },
  computed:{
  	getlistData(){
  		return this.$store.getters.getSwiperList;//通过$store获取数据
    },
    getTabList(){
  	 	 return this.$store.getters.getTabList
  	}
  },
  methods:{
  
    loadMore(){
         //this.ajax(this.parms);
         if(this.busy){
             return;
         }
         if(!this.hasNext){
            console.log('没有更多了')
             return;
         }
          this.busy = true;
          this.parms.page = this.curpage*1+1;
          this.parms.type = this.type;
         $.ajax({
              type:'get',
              url:'/wzbd/competitive/list.do',
              data: this.parms
          }).then((res)=>{
              if(res.success){
                  this.items.splice(this.items.length,0,...res.data);
                  this.hasNext = res.hashNext;
                  this.curpage = res.curpage;
                  this.busy = false;
              }
          })
    }
  }

}
</script>




