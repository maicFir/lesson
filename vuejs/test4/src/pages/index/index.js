
import Vue from 'vue';

import Index from './index.vue';
import store from '@default/store/store.js';





var vm = new Vue({
    el:'#main',
    data:{
        message:"hello js"
    },
    store,//将store注入子组件中
    template: "<Index />",
    components:{Index},
    mounted(){
        console.log('hello vuejs');
    }
  

})