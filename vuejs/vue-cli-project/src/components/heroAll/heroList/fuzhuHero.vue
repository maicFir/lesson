<template>
    <div class="hero-container">
        <div class="nav-tab">
           <nav-tab :list="heroList"></nav-tab>
       </div>
       {{name}}
    </div>
</template>
<script>
import navTab from '@/components/navTab/navTab';
import { 
        XHeader,
        Tab, 
        TabItem
} from 'vux'

export default {
  name:'fuzhu',
  components:{ 
        XHeader,
        Tab, 
        TabItem,
        navTab
  },
  data(){
      return{
          name: '辅助',
          index: 1,//1 英雄列表 0 装备列表
      }
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


