<template>
    <div class="center">
        <div class="header-img">
            <div><img :src="this.centerData.imgIcon" alt=""></div>
            <div class="ptel">
                <p>{{this.centerData.name}}(个人|{{this.centerData.tel}})</p>
            </div>
        </div>
        <div class="list">
            <ul>
                <li>
                    <a href="javascript:;">
                         <div class="lt">我的排名</div>
                         <div class="rt">{{this.centerData.paiming}}</div>
                    </a> 
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="lt">我的积分</div>
                        <div class="rt">{{this.centerData.point}}</div>
                     </a>
                </li>
                <li>
                     <a href="javascript:;">
                        <div class="lt">最近战绩胜率</div>
                        <div class="rt">{{this.centerData.vitory}}%</div>
                     </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="lt">我的铭文</div>
                        <div class="rt">{{this.centerData.mingwen}}级</div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                         <div class="lt">个人资料</div>
                        <div class="rt"><span class="trangle"></span></div>
                    </a> 
                </li>
                <li>
                    <a href="javascript:;">
                         <div class="lt">最佳英雄</div>
                         <div class="rt">{{this.centerData.hero}}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
   name: 'center',
   components: {},
   data(){
       return{
           tel:'',
           parms:{},
           centerData:{}
       }
   },
   mounted(){
       this.parms.tel = 189765243;
       this.parms.type = 'center';
       $.ajax({
           type:"get",
           url: "/wzbd/center/list.do",
            data: this.parms
       }).then((res)=>{
           this.centerData = res.data;
           console.log(res)
       })
   },
   methods:{

   }
}
</script>
<style lang="less">
    @import "./center.less";//必须要有分号，没有分号就报错
</style>


