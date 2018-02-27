import Vue from 'vue';
import store from '@/store'
import router from './router'
import HeroAll from './heroAll.vue';


new Vue({
    el: '#heroAll',
    store,
    router,
    template: '<HeroAll/>',
    components: {HeroAll}
})