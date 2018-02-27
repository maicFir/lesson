<template>
  <div id="app-container">
    <view-box >
    	   <x-header slot="header" :left-options="{backText: '返回'}" class="header">
    			 <div>{{this.name}}</div>
           <div slot="right">搜索</div>
      </x-header>
      
    	<router-view></router-view>
			<tabbar slot="bottom" style="position:fixed;bottom:0px;">
						<tabbar-item :class="isactive == '/Competitive'?'isactive':''">
								<span slot="label"><router-link to="/Competitive">答题竞区</router-link></span>
						</tabbar-item>
						<tabbar-item :class="isactive == '/Plan'?'isactive':''">
								<span slot="label"><router-link to="/Plan">王者攻略</router-link></span>  		
						</tabbar-item>
						<tabbar-item :class="isactive == '/Community'?'isactive':''">
								<span slot="label"><router-link to="/Community">英雄社区</router-link></span> 	
						</tabbar-item>
						<tabbar-item :class="isactive == '/Center'?'isactive':''">
								<span slot="label"><router-link to="/Center">个人中心</router-link></span> 
						</tabbar-item>
			</tabbar>
    </view-box>
  </div>
</template>

<script>
// 引入ViewBox模块
import {ViewBox, XHeader,Tabbar, TabbarItem, Scroller} from 'vux'

export default {
	name: 'app',
	data(){
		return{
			name:'',
			isactive:'/Competitive'
		}
	},
	mounted(){
		//	console.log('router',this.$route)
	},
	computed(){
		var hash = window.location.hash;
		var newHash = hash.split('/')[1];
		this.isactive = newHash;

	},
	watch: {
    '$route' (to, from) {
				console.log(to);
				// console.log(from)
			switch(to.name){
					case 'center':
					this.name = "个人中心";
				   this.isactive = to.fullPath;
					this.isactive = to.fullPath;
				break;
					case 'main':
					this.name = "英雄社区";
					this.isactive = to.fullPath;
				break;
					case 'plan':
						this.name = "王者攻略";
						this.isactive = to.fullPath;
					break;
				 case 'index':
						 this.name = "答题竟区";
						 this.isactive = to.fullPath;
				 break;
				 default:
				   break;
			}
		}
	},
  components: {
    ViewBox,
    XHeader,
    Tabbar, 
    TabbarItem,
		Scroller
  },
  computed:{
  	 getTabList(){
  	 	 return this.$store.getters.getTabList
  	 }
  },
  methods:{
  	 getParms:function(){
  	 		console.dir(this.$store);
  	 }
  }
}
</script>
<style lang="less">
	@import '~vux/src/styles/reset.less';
</style>

<style>
		html, body {
		    height: 100%;
		    width: 100%;
		    overflow-x: hidden;
		    overflow-y: hidden;
		}
		#app-container {
		  font-family: 'Avenir', Helvetica, Arial, sans-serif;
		  -webkit-font-smoothing: antialiased;
		  -moz-osx-font-smoothing: grayscale;
		  color: #2c3e50;
		  height:100%;
		  overflow-y: auto;
		}
		.header{
		  width: 100%;
		  position: absolute !important;
		  z-index: 9;
		  left: 0;
		  top: 0;
		}
		.bar-bootom{
			position:relative;
			bottom:0px;
			left:0px;
		}
		.isactive{
			background-color:#35495e;
		}
		.isactive p>span>a{
			color:#fff;
		}

</style>
