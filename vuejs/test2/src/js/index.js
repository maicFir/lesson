
import Vue from 'vue';

import Index from './index.vue';

import Vuex from 'vuex';

Vue.use(Vuex);


let tabs = [{name:'ixix',age:20},{name:"哈哈",age:18}];

//运用store统一管理store
const store = new Vuex.Store({
	state:{
		tabs:tabs,
		count:0
	},
	mutations:{

		add:function(state){
			state.count++;
			
		},
		decrement:function(state){
			state.count--;
		}
	}
})



new Vue({
	el:"#main",
	data:{
		tabs: tabs
	},
	store,
	template:"<Index :tabs='tabs'/>",
	components:{Index}
})

/*
	.vue文件中的通过自定义属性传递数据 :tabs="tabs" => v-bind:tabs="tabs"

	在父组件中自定义一个事件方法 @fn="fn"  子组件中要想改变父组件的data时，采用this.$emit('fn',data)

	通常是以单文件组件：
		全局定义，字符串模板
	vuex状态管理：实例对象的data达到共享状态
	通过store中的action去集中管理，通过dispatch事件去通知store去改变

	new Vuex.Store({
		state:{
			count: 0
		},
		mutations:{
			increment(state){
				state.count++;
			}
		}
	})

	在页面上使用commit派发事件，操作store中的state store.commit('increment')

	数据的双向绑定
	Object.defineProperty

*/