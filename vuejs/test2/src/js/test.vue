<template>
	<div class="test">
		<a href="javascript:;" @click="clickme">点我</a>
	</div>
</template>
<script type="text/javascript">
	
	export default {
		props:[],
		data(){
			return {

			}
		},
		methods:{
			clickme:function(e){
				e.preventDefault();//阻止默认跳转
				this.$emit('change',{"name":'react'},['student','teacher'])
			}
		}

	}
</script>