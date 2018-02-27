<template>
    <!--装备列表-->
    <div class="equlist-container">
         <nav-tab :list="equipList"></nav-tab>
    </div>
</template>
<script>
import navTab from '@/components/navTab/navTab';
export default {
    name:"equlist",
    components:{navTab},
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{
        equipList(){
            return this.$store.getters.getequipList
        }
    }
}
</script>
<style lang="less">
  @import "./equiList.less";
</style>


