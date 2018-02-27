<template>
  <div class="history">
      
    <!-- <x-header :left-options="{showBack: false}">do not show Back</x-header> -->
      <x-header slot="header" :left-options="{backText: '返回'}"  class="header">
    	   <div>历史成绩</div>
           <div slot="right" @click="share">分享</div>
      </x-header>
      <div class="jige">及格率{{precent}}</div>
      <flexbox class="test-part">
            <flexbox-item><span>考试次数</span>1</flexbox-item>
            <flexbox-item><span>及格次数</span>2</flexbox-item>
      </flexbox>
       <flexbox class="test-part">
            <flexbox-item><span>历史最高成绩</span>1分</flexbox-item>
            <flexbox-item><span>做题时间</span>2</flexbox-item>
      </flexbox>
      <div class="recent-part">
          <p class="title">最近30次成绩分数:</p>
          <div class="recent-content">

          </div>
      </div>
       <div v-transfer-dom>
             <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
      </div>
  </div>
</template>

<script>
import { 
        XHeader,
        Actionsheet, 
        TransferDom,
        XSwitch,
        Group,
        Flexbox, 
        FlexboxItem,
        Cell
    } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    XSwitch, 
    Group, 
    Cell,
    Flexbox,
    FlexboxItem,
  },
  data () {
    return {
         menus: {
            menu1: '微博',
            menu2: '微信'
         },
         showMenus: false,
         stringValue: 0,
         precent:"10%"
    }
  },
  methods:{
      share:function(){
         this.showMenus = true;
      }
  }
}
</script>

<style>
    html,body{
        padding:0px;
        margin:0px;
    }
    .history{
        width:100%;
    }
    .jige{
        text-align: center;
        padding:10px 0px;
    }
    .test-part{
        text-align:center !important;
    }
    .title{
        padding: 0px 10px;
    }
    .recent-content{
        height: 100px;
        max-width: 320px;
        border:1px solid #ccc;
        margin:0 10px;
    }
</style>




