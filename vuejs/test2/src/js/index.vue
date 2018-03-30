<template>
	<div class="wrap-box">

		<div class="nav-tab">
			<ul>
				<li>git</li>
				<li>webpack</li>
				<li>js</li>
				<li>nodejs</li>
			</ul>
		</div>
		<div class="page-body">
			<p v-for="(item,idx) in tabs" :key="idx">
				<a href='' @click="getProps(idx)">{{item.name}}</a>
				<a href=''>{{item.age}}</a>
			</p>
			
			
			<p>
				<input type="button" name="add" value="添加" @click="add"/>
				<input type="button" name="decru" value="减少" @click="decrement"/>
			</p>
			<test-view @change="changeIndex"></test-view>

		</div>
		
	</div>
	
</template>


<script>
	import TestView from './test.vue';
	import adapteScreen from './adapteScreen.js';
	import style from '../css/index.styl'

	export default {
		name:'templete',
		components:{TestView},
		props: ['tabs'],
		data(){
			return{
				message: "vuejs",
				ct: this.count
			}
		},
		computed:{
			count(){
				return this.ct
			}
		},

		created:function(){//new Vue()实例创建完后被立即调用，挂载阶段没开始，$el属性不可见
			console.log(this);
			console.log("elOBj",this.$el)
		},
		beforeMount:function(){//在挂载之前被调用
			console.log("beforeMount",this.$el)
		},
		mounted:function(){
			console.log("mounted",this.$el)
		},
		updated:function(){//当数据更新变化时，就会触发这个函数
			console.log('update',this.$el);
		},
		destroyed:function(){

		},
		methods:{
			getProps:function(idx){
				console.log(idx)
				console.log(this);
				console.log(this.tabs)
				console.log(this.$root.$options.el)
			},
			//自定义方法
			changeIndex:function(mesg,perfmomer){
				this.message = mesg;
				console.log(perfmomer);
				console.log(this.message);
			},
			decrement:function(){
				this.$store.commit('decrement')
			},
			add:function(){
				console.log(this.$store);
				console.log(this);
				this.tabs = [];
				this.$nextTick(function(){
					console.log(1111)
			   })
				this.$store.commit('add')//通过commit去派发事件
			}
		}
	}
</script>
<style lang="stylus">
	
	
	
</style>