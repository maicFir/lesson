<template>
        <!--选择题-->
        <div class="chiose" v-if="this.type == 1">
            <div class="swiper-question">
                        <swiper  :show-dots="false" v-model="swipwerindex" @on-index-change="onIndexChange">
                            <swiper-item v-for="(item,i) in swiperQuestlist" :key="i">
                                <div v-for="(imgElem,k) in item.imgs" :key="k" class="img-swiper"><img :src="imgElem" height="150"></div>
                                <div class="title">{{item.timu}}</div>
                                <div class="content">
                                    <p v-for="(content,idx) in item.answer" :key="idx" :alt="content.istrue" @click="selectAnswer($event,item)">
                                        <span></span>
                                        {{content.cnt}}
                                    </p>
                                </div>
                            </swiper-item>
                        </swiper>
            </div>
            <flexbox>
                <flexbox-item class="opaction-btn">
                    <a href="javascript:;" @click="swipwerPrevIndex" :class="swipwerindex!= 0?'active':''">上一题</a>
                </flexbox-item>
                <span>({{swipwerindex+1}}/{{swiperQuestlist.length}})</span>
                <flexbox-item class="opaction-btn">
                    <a href="javascript:;" @click="swipwerNextIndex" :class="swipwerindex>=swiperQuestlist.length-1?'':'active'">下一题</a>
                </flexbox-item>
            </flexbox>
            <diag v-if="showModel" :isshow="showModel" :index="swipwerindex" @dataList="dataList" @tindex="swipwerNextIndex"  @checkStatus="checkStatus"  @checkIndx="swipwerIdx"></diag>
        </div>
</template>
<script>
import { 
        Swiper, 
        GroupTitle, 
        SwiperItem, 
        XButton, 
        Divider,
        Flexbox,
        FlexboxItem,
        } from 'vux';
import $ from 'jquery';
import axios from 'axios';
import diag from './dilag.vue';
let  baseList = [{
  url: 'javascript:',
  img: 'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/119/119-bigskin-4.jpg'
}]
let questList = [
    // {
    //     imgs:['http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/119/119-bigskin-4.jpg'],
    //     timu:"第一题的答案是",
    //     isNumber:3,
    //     answer:[
    //         {cnt:'今年的周年限定皮肤已经曝光，其技能特效和那种花相关',istrue:1},
    //         {cnt:'今年的周年限定皮肤的品质属于',istrue:2},
    //         {cnt:'在王者荣耀里，鲁班七号-电玩小子的帽子上写了什么',istrue:3},
    //         {cnt:'新版本上线的第一个英雄，他的名字是',istrue:4}
    //     ]
    // },
]

export default {
   name: 'chiose',
   props:['isshow'],
   components:{
        Swiper,
        SwiperItem,
        GroupTitle,
        XButton,
        Divider,
        Flexbox, 
        FlexboxItem,
        diag
   },
   data(){
       return{
           swiperQuestlist: [],
           swipwerindex: 0,
           isdefault: -1,//默认初始化状态,
           type:1,//1 选择题，2 判断题 3 填空题 4 文字题 5 看图题，
           showModel: false,
           isTrue: false

       }
   },
   methods:{
       onIndexChange(index){
           this.swipwerindex = index;
       },
       swipwerPrevIndex(){
           if(this.swipwerindex == 0){
               this.swipwerindex = 0;
           }else{
               this.swipwerindex--;
           }  
       },
       swipwerNextIndex(){
           if(this.swipwerindex>=this.swiperQuestlist.length-1){
               this.swipwerindex = this.swiperQuestlist.length-1;
               return;
           }else{
                this.swipwerindex = this.swipwerindex+1;
           };
       },
       computed:{
           getSwiperIndex(){
               return this.$store.getters.getSwiperIndex
           }
       },
       selectAnswer(event,item){
        var target = event.srcElement||event.currentTarget;
      
        console.dir(this.$store);
        console.log(this.$store.getters.getSwiperIndex)
        var altNum = $(target).attr('alt');
        if(this.isTrue){
            return
        }
         if(altNum == item.isNumber){
               $(target).addClass("success");
               this.isTrue = true;
            }else{
                //this.$emit('checkStatus',true);
                this.showModel = true;
                $(target).addClass('error');
                this.isTrue = true;
           } 
       },
       
       checkStatus(status){
           this.showModel = status;
           console.log(status)
       },
       swipwerIdx(idx){
           this.swipwerindex = idx;
       },
       dataList(data){
           console.log("===="+data)
           console.log(data)
           this.swiperQuestlist = data;
       }     
       
   },
   watch:{
       swipwerindex(curentVal,oldVal){
           if(this.swipwerindex == curentVal){
               this.isTrue = false;
           }
       }
   },
   mounted:function(){
       let self = this;
       $.ajax({
           type: 'get',
           url: '/wzbd/index/list.do'
       }).then((res)=>{
           console.log(res.data);
           this.swiperQuestlist = res.data.list
       });
       this.$on('dataList',function(data){
           self.swiperQuestlist = data;
       })
   }
   
  
  
}
</script>

