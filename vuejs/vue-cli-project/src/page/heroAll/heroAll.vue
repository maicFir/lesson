<template>
    <div class="heroOrequircontainer">
        <x-header slot="header" :left-options="{backText: '返回'}"  class="header">
            
        </x-header>
        <tab class="tabContainer">
            <tab-item selected class="list-tab">
                 <router-link to="/allhero" @click="heroList">英雄列表</router-link> 
            </tab-item>
            <tab-item class="list-tab">
                <router-link to="/equlist">装备列表</router-link>
            </tab-item>
        </tab>
        <!--英雄列表,装备列表内容区域-->
        <router-view></router-view>
    </div>
</template>
<script>
import { 
        XHeader,
        Tab, 
        TabItem
} from 'vux'

export default {
  name:'heroAll',
  components:{ 
        XHeader,
        Tab, 
        TabItem,
  },
  data(){
      return{
          name: '我是一个英雄测试页面',
          index: 1,//1 英雄列表 0 装备列表
      }
  },
  methods:{
      onItemClick(index){
         this.index = index;
      },
      heroList(){
          alert(111)
          console.dir(this.$router)
      }
  },
  computed:{
     
  }
  
}
</script>
<style lang="less">
    @import './heroAll.less';
</style>


