<template>
  <div class="tv-container">
     <nav-tab :list="getTabList" class="bailiTab"></nav-tab>
     <div class="scroll-list" style="margin:100px 0px 50px">
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
import infiniteScroll from 'vue-infinite-scroll'
import $ from 'jquery';
import navTab from '@/components/navTab/navTab';


Vue.use(infiniteScroll);
export default {
  name: 'baili',
  components:{
    navTab
  },
  data(){
  	return {
      msg:"东皇太一",
      type:'',
      page: 1,
      ajaxFlag: false,
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
  	  getTabList(){
  	 	  return this.$store.getters.getTabList
  	  }
  },
  methods:{
      loadMore(){
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

<style scoped>
    .tv-container{
      color:green;
    }
</style>
