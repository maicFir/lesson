<template>
    <div class="indexmain">
        <div class="navtab">
            <nav-tab :tablist="navTablist" @hashchange="hashchange"></nav-tab>
        </div>
        <div class="cnt">
           <p  v-for="(item,idx) in classList" :key="idx" :class="item" v-if="hash==item">{{item}}</p>
        </div>
        <!-- <input type="button" value="添加" @click="add">
        {{count}}
        <input type="button" value="减少" @click="reduce"/>
        {{msg}} -->
        
    </div>
</template>

<script>

import {mapState} from 'vuex';
import navTab from '@default/components/navTab/navTab.vue';
//利用mapState辅助生成计算属性
export default {
  data(){
      return{
          navTablist:this.$store.getters.getdataList,
          classList:['html5',"css3","react",'nodejs'],
          hash:'html5'
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
      hashchange(pames){
         this.hash = pames;
        console.log("pames",pames);
        
        
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
        console.log(Math.random()*10)
       //this.hashchange();
    }
}
</script>
<style lang="stylus">
   .html5,.css3,.react,.nodejs{
       width:100%;
       heigh:60px;
       background:red;
   }
</style>


