<template>
  <div class="commuity-box">
   <nav-tab :list="getTabList"></nav-tab>
    <div class="swiper-container">
        <swiper loop auto :aspect-ratio="300/800">
        		<swiper-item  class="swiper-demo-img" v-for="(item, index) in getlistData" :key="index">
          		   <img :src="item.img" width="100%" height="auto">
        		</swiper-item>
        </swiper>
    </div>
    <div class="scroll-list" style="margin-bottom:50px;">
        <scroller
          :on-refresh="refresh"
          :on-infinite="infinite"
          style="top:220px"
          ref="myscroller"
        >
            <!-- <panel :list="items" :type="type"></panel> -->
             <div v-for="(item, index) in items" class="row" :key="index" :class="{'grey-bg': index % 2 == 0}">
                {{ item }}
            </div>
        </scroller>
    </div>
    
    
  </div>
</template>

<script>
import Vue from 'vue';
import {Swiper, SwiperItem,Panel} from 'vux';
import VueScroller from 'vue-scroller';
import $ from 'jquery';
import navTab from '@/components/navTab/navTab';
import "@/styles/common.less";
Vue.use(VueScroller)
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
      type:'1',
      page: 1,
      ajaxFlag: false,
      list:[
            {
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: '标题一',
                desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                url: '/component/cell'
            }, 
            {
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: '标题二',
                desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                url: {
                  path: '/component/radio',
                  replace: false
                },
                meta: {
                  source: '来源信息',
                  date: '时间',
                  other: '其他信息'
                }
            }
      ],
      items:[]
  	}
  },
  mounted(){
    this.ajaxFlag = false;
    this.ajax();
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
  	refresh(){
        // this.page = this.page+1;
        // if(this.ajaxFlag){
        //   return;
        // }
        // let arr = [];
        // setTimeout(()=>{
        //   var start = this.top -1;
        //   for(var i=start;i>start-10;i--){
        //     arr.splice(0,0,i)
        //   }
        //   this.ajax({page:this.page})
        //   this.top = this.top -10;
        //   this.$refs.myscroller.finishPullToRefresh()//完成加载
        // })
         setTimeout(() => {
          var start = this.top - 1;
          for (var i = start; i > start - 10; i--) {
               this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;
        }, 1500)
        this.$refs.myscroller.finishPullToRefresh()//完成加载
    },
    loadMore(){
         
         var start = this.bottom + 1
          for (var i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10
          // console.log(this.items)
        //   console.log("dedede");
        //   this.ajax({page:this.page});
          

    },
    infinite(done){
         setTimeout(() => {
          var start = this.bottom + 1
          for (var i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10
          done()
        }, 1500)
           
       
    },
    ajax(parms){
          this.ajaxFlag = true;
          parms = parms||{};
              $.ajax({
              type:'get',
              url:'/wzbd/competitive/list.do',
              data:parms
          }).then((res)=>{
             console.log(res.data)
              let b = [];
              let a = this.items.concat(res.data);
              for(let i in res.data){
                  b.unshift(res.data[i]);
              }
              this.items = b;
              console.dir(b);
              
              this.ajaxFlag = false;

          })
            // for (var i = 1; i <= 5; i++) {
            //     this.items.push(i + ' - keep walking, be 2 with you.')
            // }
            this.top = 1;
            this.bottom = 20;

      },
  }

}
</script>

