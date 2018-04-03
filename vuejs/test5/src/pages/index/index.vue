<template>
    <div class="indexmain">
        <nav-tab :tablist="navTablist" @hashchange="hashchange"></nav-tab>
        <!-- <input type="button" value="添加" @click="add">
        {{count}}
        <input type="button" value="减少" @click="reduce"/>
        {{msg}} -->
         <list-view :picList="picList" :type="type"></list-view>
       
       
        
        <count-tab></count-tab>
    </div>
</template>

<script>

import {mapState} from 'vuex';
import $ from "jquery";
import navTab from '@default/components/navTab/navTab.vue';
import listView from "@default/components/viewList/viewList.vue"
import countTab from '@default/components/count/count.vue';

//利用mapState辅助生成计算属性
export default {
  data(){
      return{
          navTablist: this.$store.getters.getdataList,
          classList: this.$store.getters.getdataList,
          type:"tuijian",
          currentIndex:0,
          currentPage: 1,
          picList:[]
      }
  },
  components:{navTab,countTab,listView},
  methods:{
      add(){
          //console.log(111);
          //this.$store.commit('add');通过commit去响应mutation中的state
          this.$store.dispatch('add',{add:10,age:30})
          console.dir(this);
          console.log(this.$store.state.count)
      },
      reduce(){
           this.$store.commit('decrement',{num:10,money:100})
      },
      hashchange(parms){
         this.currentIndex = parms.id;
         let currentpage = this.currentPage;
         let id = parms.id;
         let type = parms.type;
         this.type = type;
         var data = {
             id:id,
             type: type,
             page: currentpage
         }
         $.ajax({
             type:'get',
             data:data,
             url:"/test/tuijian/list.do"
         }).then((res)=>{
              console.dir(res)
            
             this.picList = res.data;
         });
        
        console.log("pames",parms);
      },
      isCurrentShow(idx){
        if(this.currentIndex == idx){
            return true;
        }else{
            return false
        }
      }
  },
  //监听上一次data
  watch:{
      hash:function(nVal,oVal){
          console.log("====="+nVal,oVal);
      }
  },
    computed:mapState({
        count:function(){
            return this.$store.state.count
        },
        msg:function(){
            return this.$store.state.msg
        },
        dataList:function(){
            return this.$store.getters.getdataList
        }
    }),
    //页面初始化实例或者刷新当前网页时，会重新加载这个方法
    mounted(){
        console.log("首次刷新加载")
    },
    //data发生变化时，就会触发该函数
    updated(){
        //console.log(Math.random()*10)
       //this.hashchange();
    }
}
</script>
<style lang="stylus">
    @import "./index.styl";
   
</style>


