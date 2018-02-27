<template>
  <div class="commuity-movies-container">
      <nav-tab :list="getTabList"></nav-tab>
     {{msg}}
      
  </div>
</template>

<script>
  import navTab from '@/components/navTab/navTab';


  export default {
    name: 'moviesContainer',
    components:{
      navTab
    },
    data(){
    	return {
    		msg:"钟馗"
    	}
    },
    computed:{
        getTabList(){
            return this.$store.getters.getTabList
        }
    },
    methods:{
    	
    }

  }
</script>

<style scoped>
   
</style>
