<template>  
        <!--判断题-->
        <div class="tiankong">
            填空题
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
let  baseList = [{
  url: 'javascript:',
  img: 'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/119/119-bigskin-4.jpg'
}]


export default {
   name: 'tiankong',
   components:{
        Swiper,
        SwiperItem,
        GroupTitle,
        XButton,
        Divider,
        Flexbox, 
        FlexboxItem
       
   },
   props:['dataQuest'],
   data(){
       return{
           swipwerindex: 0,
           isdefault: -1,//默认初始化状态,
           showModel: false,

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
           if(this.swipwerindex>=dataQuest.length-1){
               this.swipwerindex = dataQuest.length-1;
               return;
           }else{
                this.swipwerindex = this.swipwerindex+1;
           };
       },
       selectAnswer(){
        //    this.isdefault = 0;
        //    let swiperQuestlist = this.swiperQuestlist;
        //    let answer = swiperQuestlist.answer;
        //    for(i in answer){
        //        if(answer[i]['istrue'] == swiperQuestlist[i]['isNumber']){
        //            this.isdefault = 0;
        //        }
        //    }
          
       }
   },
  
  
}
</script>

