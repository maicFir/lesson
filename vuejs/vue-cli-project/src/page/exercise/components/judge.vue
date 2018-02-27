<template>  
        <!--判断题-->
        <div class="judge">
            判断题
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
   name: 'panduan',
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
      
   },
  
  
}
</script>

