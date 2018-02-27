import Vue from 'vue';

import History from './history.vue';
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n';
Vue.config.productionTip = false;

Vue.use(Vuex);
let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})
Vue.use(vuexI18n.plugin, store)
new Vue({
    el:"#history",
    template: '<History/>',
    components: {History}
})


