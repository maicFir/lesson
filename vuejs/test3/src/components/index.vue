<template>
    <div class="indexmain">
        <input type="button" value="添加" @click="add">
        {{count}}
        <input type="button" value="减少" @click="reduce"/>
        {{msg}}
        <div class="datalist">
            <p v-for="(item,idx) in dataList" :key="idx">{{item}}</p>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex';
//利用mapState辅助生成计算属性
export default {
  data(){
      return{

      }
  },
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

