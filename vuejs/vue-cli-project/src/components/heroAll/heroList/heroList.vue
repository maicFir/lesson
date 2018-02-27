<template>
    <!--英雄列表-->
    <div class="hero-container">
       <div class="nav-tab">
           <nav-tab :list="heroList"></nav-tab>
       </div>
       <div class="hero-list">
           <div class="flex">
               <div  v-for="(item,idx) in heroListData" :key="idx">
                   <a :href="item.href+'?id='+item.id"><img :src="item.avatar" alt="" width="100%" height="auto"></a>
                   <p>{{item.name}}</p>
                </div>
           </div>
       </div>
    </div>
</template>
<script>
import { Flexbox, FlexboxItem} from 'vux';
import $ from 'jquery';
import navTab from '@/components/navTab/navTab';

let heroDataUrl = "http://i.xiwnn.com:16888/wzbd/herosdata";
let heroDefault = "/wzbd/herosdata"

var data = [
    {createdOn:"822611391316",description:"具周边然无",drawName:"现",gnPhone:"13588987865",goodsName:"内写",id:0,point:26},
    {createdOn:"822611391316",description:"具周边然无",drawName:"现",gnPhone:"13588987865",goodsName:"内写",id:2,point:26},
    {createdOn:"822611391316",description:"具周边然无",drawName:"现",gnPhone:"13588987865",goodsName:"内写",id:3,point:26},
    {createdOn:"822611391316",description:"具周边然无",drawName:"现",gnPhone:"13588987865",goodsName:"内写",id:6,point:26}
];
export default {
    name:"herolist",
    components:{Flexbox, FlexboxItem,navTab},
    data(){
        return{
            heroListData:[],
            http:'http://i.xiwnn.com:16888',
            heroDetail:'wzbd/herodetail?id='
            
        }
    },
    mounted:function(){
        $.ajax({
            type: 'get',
            url: heroDefault,
        }).then((res)=>{
            console.log(res.data.list)
            this.heroListData = res.data.list;
        })
    },
    methods:{

    },
    computed:{
         heroList(){
          return this.$store.getters.getHeroList;
      }
     
    }
}
</script>
<style lang="less">
  @import "./common.less";
</style>

