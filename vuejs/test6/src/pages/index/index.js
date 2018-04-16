
import Vue from 'vue';

import Index from './index.vue';
import store from '@default/store/store.js';
import updateScreen from '@default/common/adapterScreen.js';
import VueLazyLoad from "vue-lazyload"

Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: '/src/img/error.jpg',
    loading: '/src/img/11/009.gif',
    attempt: 1
  })


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