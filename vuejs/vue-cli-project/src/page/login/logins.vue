<template>
  <div id="login-container">
    <view-box >
    	<flexbox style="padding-top:76px;">
      		<flexbox-item>
      				<div class="register" @click="registerOrLogin('register')" :class="isregiter==0?'active':''">注册</div>
      		</flexbox-item>
      		<flexbox-item>
      				<div class="loader" @click="registerOrLogin('login')" :class="isregiter==1?'active':''">登陆</div>
      		</flexbox-item>
    	</flexbox>
      <div class="register-form" v-if="isregiter == 0">
          <regist-elem></regist-elem>
      </div>
      <div class="login-form" v-else>
        <userlogin-elem></userlogin-elem>
      </div>
    </view-box>
  </div>
</template>

<script>

// 引入ViewBox模块
import {ViewBox,GroupTitle, Group, Cell, XInput,Flexbox,FlexboxItem} from 'vux'

import registElem from './components/register'
import userloginElem from './components/userLogin'
export default {
  name: 'login',
  components: {ViewBox,GroupTitle,Group, Cell,XInput,Flexbox,FlexboxItem,registElem,userloginElem},
  computed:{
  	 getTabList(){
  	 	
  	 }
  },
  data(){
    return{
      isregiter:0,//0代表注册，1代表登陆
    }
  },
  methods:{
  	 registerOrLogin:function(type){
  	 		  if(type == 'register'){
            this.isregiter = 0;
          }else{
              this.isregiter = 1;
          }
  	 }
  }
}
</script>
<style lang="less">
	@import '~vux/src/styles/reset.less';
  @import './login.less';
</style>




