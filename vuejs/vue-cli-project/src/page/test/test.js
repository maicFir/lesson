import Vue from 'vue'
import Test from './test.vue'
Vue.config.productionTip = false


new Vue({
	  el: '#test',
	  template: '<Test/>',
	  components: {Test}
})