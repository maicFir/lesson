import Vue from 'vue';
import Exercise from './exercise.vue';
import store from '@/store';
Vue.config.productionTip = false;


new Vue({
    el: '#exercise',
    store,
    template: '<Exercise/>',
    components: {Exercise}
})