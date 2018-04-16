<template>
    <div class="indexmain">
        <nav-tab :tablist="navTablist" @hashchange="hashchange"></nav-tab>
        
        <div id="minirefresh" class="minirefresh-wrap">
            <div class="minirefresh-scroll">
                    <div class="pic-view-list" ref="picViewList" v-for="(item,idx) in navTablist" :key="idx">
                        <a href="" class="item" v-for="(items,i) in picList" :key="i" v-if="parmsObj.type == item.type">
                            <div class="pic-left">
                                <div class="img">
                                    <img :src="items.img"  alt="">
                                </div>
                                <div class="desc-info">
                                    <p>{{items.title}}</p>
                                    <p>
                                        <span>{{items.num2}}</span>
                                        <span>
                                            <i>抢</i>
                                            <i>{{items.num1}}</i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div> 
            </div>
        </div>
        
    </div>
</template>

<script>

import {mapState} from 'vuex';
import $ from "jquery";
import navTab from '@default/components/navTab/navTab.vue';

//利用mapState辅助生成计算属性
export default {
  data(){
      return{
          navTablist: this.$store.getters.getdataList,
          classList: this.$store.getters.getdataList,
          
          parmsObj:{
              type:"tuijian",
          },
          currentIndex:0,
          currentPage: 1,
          picList:[]
      }
  },
  components:{navTab},
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
      renderData(parms){
        $.ajax({
             type:'get',
             data:parms,
             url:"/test/tuijian/list.do"
         }).then((res)=>{
              console.dir(res)
             this.picList = res.data;
             if(parms.page>1){
                 this.picList = this.picList.concat(res.data)
             }
         });
      },
      hashchange(parms){
         this.currentIndex = parms.id;
         let currentpage = this.currentPage;
         let id = parms.id;
         let type = parms.type;
         this.parmsObj.type = type;
         var data = {
             id: id,
             type: type,
             page: currentpage
         }
         this.parmsObj = data;
        this.renderData(data);
        
        console.log("pames",parms);
      },
      isCurrentShow(idx){
        if(this.currentIndex == idx){
            return true;
        }else{
            return false
        }
      },
      resetPrms(){
          this.parmsObj.page = 1;
      },
      //下拉
      downLoadData(parms){
          this.resetPrms();
          let p = parms || {};
          p = this.parmsObj;
          this.renderData(p)
      },
      //上拉
      upLoadData(){
        //this.parmsObj.page++;
        this.renderData(this.parmsObj)
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
        this.resetPrms();
        console.log("首次刷新加载");
        let self = this;
        var miniRefresh = new MiniRefresh({
        container: '#minirefresh',
        down: {
            callback: function() {
                // 下拉事件
                console.log("==="+Math.random());
                self.downLoadData();
                miniRefresh.endDownLoading(true);
            }
        },
        up: {
            callback: function() {
                // 上拉事件
                self.upLoadData();
                // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
               
                miniRefresh.endUpLoading(true);
            }
        }
});
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


