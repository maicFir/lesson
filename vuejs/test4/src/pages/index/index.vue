<template>
    <div class="indexmain">
        <div class="navtab">
            <nav-tab :tablist="navTablist"></nav-tab>
        </div>
        <input type="button" value="添加" @click="add">
        {{count}}
        <input type="button" value="减少" @click="reduce"/>
        {{msg}}
        
    </div>
</template>

<script>

import {mapState} from 'vuex';
import navTab from '@default/components/navTab/navTab.vue';
//利用mapState辅助生成计算属性
export default {
  data(){
      return{
          navTablist:this.$store.getters.getdataList
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
      }
  },
//   computed:{
//       count(){//以计算属性返回某个状态
//           return this.$store.state.count
//       }
//   }
        //mapState：统一管理state，通过this.$store.count获取数据
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
    })
}
</script>

