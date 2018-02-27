<template>
	 <div class="navTab">
      		 <scroller 
	      		 	:lock-y="true"
	      		 	@touchstart.native.stop=""
		            @touchmove.native.stop=""
		            @touchend.native.stop=""
		            @mousedown.native.stop=""
		            @mousemove.native.stop=""
		            @mouseup.native.stop=""
      		 	>
				      <tab class="tab-container">
				        <tab-item class="box1-item" v-for="(item,index) in getTabLists" :key="index" :selected="selectTab(item.key)">
				        	 <router-link :to="item.path">{{item.name}}</router-link>  	
				        </tab-item>
				      </tab>
    			</scroller>
      	
      </div>
</template>
<script>
// 引入ViewBox模块
import { Tab, TabItem, Scroller} from 'vux'
export default {
  props:['list'],//从父组件中props传入子组件的数据
  name: 'navTab',
  components: {
    Tab,
    TabItem,
    Scroller
  },
  computed:{
  	 getTabLists(){
  	 	 return this.list
  	 }
  },
  methods:{
  	    getParms:function(){
  	 		console.dir(this.$store);
		 },
		 selectTab:function(key){
				 let hashArr = window.location.hash.split("/");
				 let hash = hashArr[hashArr.length-1];
				 if(hash == key){
					 return true
				 }else{
					 return false
				 }
		 }
  }
}
</script>
<style lang="less">
	@import '~vux/src/styles/reset.less';
</style>

<style>
		.tab-container{
			width:600px;
		}

</style>