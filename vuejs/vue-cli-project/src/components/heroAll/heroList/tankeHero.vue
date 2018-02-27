<template>
    <div class="hero-container">
        <div class="nav-tab">
           <nav-tab :list="heroList"></nav-tab>
       </div>
       {{name}}
    </div>
</template>
<script>
import { 
        XHeader,
        Tab, 
        TabItem
} from 'vux'
import navTab from '@/components/navTab/navTab';
export default {
  name:'tanke',
  components:{ 
        XHeader,
        Tab,
        navTab,
        TabItem,
  },
  data(){
      return{
          name: '坦克',
          index: 1,//1 英雄列表 0 装备列表
      }
  },
  mounted:function(){
      console.dir(this.$route)
  },
  methods:{
   
  },
  computed:{
    heroList(){
       return this.$store.getters.getHeroList;
    }
  }
}
</script>
<style lang="less">
     @import "./common.less";
</style>


