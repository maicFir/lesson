<template>
	<div class="competive-main">
		<div class="list-item">
			<div><span>{{username}}</span><span>等级:{{level}}v</span></div>
			<div class="set" onclick="window.location.href='/login.html'"><icon type="info" is-msg></icon></div>
		</div>
		<div class="list-item">
			<div><span>最新/推荐问答</span></div>
			<div class='news-answer'>
				<marquee>
      				<marquee-item v-for="(item,i) in newslider" :key="i" @click.native="onClick(i)" >{{item.name}}</marquee-item>
    			</marquee>
			</div>
		</div>
		
		<div class="list-item">
				<div><span><divider>我的通关</divider></span></div>
				 <flexbox style="text-align:center">
				      <flexbox-item>
				      		<a href="/history.html">历史成绩</a>
				      </flexbox-item>
				      <flexbox-item>
				      		<a href="javascript:;" @click="getAjax">开始通关</a>
				      </flexbox-item>
   				 </flexbox>
		</div>

		<div class="list-item">
			<div><span> 全部题型</span></div>
				<div class="swiper-container">
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
					        <tab-item class="box1-item" v-for="(item,index)
							 in answerList" :key="index" :selected="index == 0">
					        	<a :href="item.href">{{item.name}}</a> 	
					        </tab-item>
					      </tab>
	    			</scroller>
			   </div>
		</div>
		<div class="list-item">
			<div><span>王者英雄</span></div>
				<div class="swiper-container">
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
					        <tab-item class="box1-item" v-for="(item,index) in getTabList" :key="index" :selected="index == 0">
					        	<a :href="item.href">{{item.name}} </a>	
					        </tab-item>
					      </tab>
	    			</scroller>
			   </div>
		</div>

		<div class="list-item">
			<div><span>王者装备</span></div>
				<div class="swiper-container">
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
					        <tab-item class="box1-item" v-for="(item,index) in getTabList" :key="index" :selected="index == 1">
					        	{{item.name}} 	
					        </tab-item>
					      </tab>
	    			</scroller>
			   </div>
		</div>

		<div class="list-item">
			<div><span>王者装备</span></div>
				<div class="swiper-container">
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
					        <tab-item class="box1-item" v-for="(item,index) in getTabList" :key="index" :selected="index == 2">
					        	{{item.name}} 	
					        </tab-item>
					      </tab>
	    			</scroller>
			   </div>
		</div>
	</div>

</template>

<script>
	import './competive.less';
	import utils from '@/commons/utils';
	import {XHeader,Icon,Flexbox, FlexboxItem, Divider,Scroller,Tab, TabItem,Marquee, MarqueeItem} from 'vux';
	import $ from 'jquery';
    import anxios from 'axios'
	export default {
		name:'index',
		components:{XHeader,Icon,Flexbox, FlexboxItem, Divider,Scroller,Tab, TabItem,Marquee, MarqueeItem},
		data(){
			return {
				username: '鲁班大师',
				level:20,
				newslider:[
					{name:'百星王者带你飞第7期：百星王者诸葛亮，意识流10分钟速推',href:"/exercise.html?type=1"},
					{name:'跟我上王者 第三季第8期：达摩配上他，要捶得捶',href:""},
					{name:'跟我上王者第三季 第7期：貂蝉与吕布，王者峡谷的',href:""},
					{name:'据说女生都是这样玩王者荣耀的！你中抢了吗？',href:""},
				],
				answerList:[
					{name:"选择题", href:"/exercise.html?type=1"},
					{name:"判断题", href:"/exercise.html?type=2"},
					{name: "填空题", href:"/exercise.html?type=3"},
					{name: "文字题", href:"/exercise.html?type=4"},
					{name: "看图题", href:"/exercise.html?type=5"}
				],
				getTabList:[
					{name:"全部", href:"heroAll.html"},
					{name:"老夫子", href:"###"},
					{name:"蔡文姬", href:"###"},
					{name:"关羽", href:"###"},
					{name:'大乔', href:"###"},
					{name: "张飞", href:"###"},
					{name: '达摩', href:"###"},
					{name: '后羿', href:"###"}
				]
			}
		},
		mounted(){
			
		},
		methods:{
			getAjax(){
				// let origin = window.location.origin;
				// console.log(utils.name);
				// $.get('https://www.easy-mock.com/mock/590c666f87cce4690fed2d01/example/my-paoject/competitive/list.do',function(res){
					
				// });
			
			}
		}
	}
</script>


