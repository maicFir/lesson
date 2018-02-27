<template>
	<div class="login">
		<group label-width="4.5em" label-margin-right="2em" label-align="left">
			  <x-input title="邮箱账号" placeholder="请输入邮箱账号"></x-input>
			  <x-input title="密码" v-model="password"  placeholder="请输入密码"></x-input>
	      <x-input title="密码确认" type="password" placeholder="必填" ></x-input>    
  	 	</group>
	     <flexbox orient="vertical" :gutter="0">
	         <flexbox-item :span="6">
	               <x-button type="primary" class="load-btn">登陆</x-button>
	          </flexbox-item>
	     </flexbox>
		   <flexbox :gutter="50">
		        <flexbox-item>
		          <x-button type="primary">游客登陆</x-button>
		        </flexbox-item>
		        <flexbox-item>
		          <x-button type="warn">第三方登陆</x-button>
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
  		},
  		methods:{
  			thirdPartLogin:function(){
  				alert(111)
  			}
  		},
  		data(){
  			return{
  				email:'',
  				password:'',
  				surePass: ''
  			}
  		}

	}
</script>