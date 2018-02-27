<template>
	<div class="register">
		<group label-width="4.5em" label-margin-right="2em" label-align="left">
			  <x-input title="用户名" placeholder="请输入用户名"></x-input>
			  <x-input title="邮箱账号" placeholder="请输入邮箱账号"></x-input>
			  <x-input title="密码" type="password" placeholder="请输入密码"></x-input>    
  	 	</group>
	     <flexbox orient="vertical" :gutter="0">
	         <flexbox-item :span="6">
	               <x-button type="primary" class="load-btn">注册</x-button>
	          </flexbox-item>
	     </flexbox>
	</div>

</template>
<script>
	import {GroupTitle, Group, Cell,XButton,XInput,Flexbox,FlexboxItem} from 'vux';
	export default {
		name:'loginArea',
		components:{
		  	GroupTitle,
		  	Group,
		  	Cell, 
		  	XInput,
		  	Flexbox,
		  	XButton,
		  	FlexboxItem
  		}

	}
</script>