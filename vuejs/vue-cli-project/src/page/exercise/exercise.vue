<template>
    <div class="exerciser-container">
        <chiose v-if="type == 1"></chiose>
        <judge v-if="type == 2"></judge>
        <tiankong v-if="type == 3"></tiankong>
        <kantu v-if="type == 4"></kantu>
    </div>
</template>
<script>
import chiose from './components/chiose.vue';
import judge from './components/judge.vue';
import kantu from './components/kantu.vue';
import tiankong from './components/tiankong.vue';
/*
    <chiose v-if="type == 1" :isshow="isshowDilag" @checkStatus="checkStatus"></chiose>
    通过父组件中的自定义值，向子组件中传值，子组件用props接收父组件的值
*/
export default {
  name: 'exercise',
  components: {chiose,judge,kantu,tiankong},
  data(){
      return{
          type: 1,//1 选择题，2 判断题 3 填空题 4 看图题
          isshowDilag: true,//弹框是否显示
      }
  },
  //整个dom加载完毕时加载该方法
   mounted(){
       let typeObj = {};
       let hrefArr = window.location.href.split('?')[1].split('=');
       typeObj[hrefArr[0]] = hrefArr[1];
       this.type = typeObj.type;
   },
   methods:{
       //自定义一个方法改变isshowDilag
       checkStatus(status){
           this.isshowDilag = status
           console.log(status)
       }
   }
}
</script>
<style lang="less">
    @import './exercise.less';
</style>

