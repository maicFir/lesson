import Vue from 'vue'
import Login from './logins.vue'
Vue.config.productionTip = false


new Vue({
	  el: '#login',
	  template: '<Login/>',
	  components: {Login}
})