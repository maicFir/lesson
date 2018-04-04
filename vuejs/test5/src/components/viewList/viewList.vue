<template>
 <div class="list-container">
    <div class="pic-view-list" ref="picViewList" v-for="(item,idx) in navTablist" :key="idx">
        <a href="" class="item" v-for="(items,i) in picList" :key="i" v-if="type == item.type">
            <div class="pic-left">
                <div class="img">
                    <img :src="defaultimg" :data-src="items.img" alt="">
                </div>
                <div class="desc-info">
                    <p>{{items.title}}</p>
                    <p>
                        <span>{{items.num2}}</span>
                        <span>
                            <i>抢</i>
                            <i>{{items.num1}}</i>
                        </span>
                    </p>
                </div>
            </div>
        </a>
    </div>   
</div>
    
</template>
<script>
import $ from "jquery";
export default {
  props: ["picList", "type"],
  data() {
    return {
      defaultimg: "/src/img/error.jpg",
      navTablist: this.$store.getters.getdataList
    };
  },
  created() {},
  updated() {
    this.loadlistData();
    this.lazyImg(this.$refs.picViewList);
  },
  methods: {
    loadlistData() {
      console.log("dgyededed===" + Math.random() * 10);
    },
    lazyImg(node){
            var dataCache = {};
           setTimeout(function(){

            var nodes = $(node).find("img");
            var imgsArr = Array.from(nodes);
            imgsArr.map((img)=>{
                var src = img.getAttribute("data-src");//获取页面的data-src
                var Oimg;
                if(!src){
                    return;
                }
                if(!dataCache[src]){
                    Oimg = new Image();
                    Oimg.src = src;
                    Oimg.onload = function(){
                        img.src = src;
                        dataCache[src] = true;
                        Oimg = null;
                    }  
                }else{
                    img.src = src;
                }
                img.removeAttribute("data-src")
            })
        },500)
      }
  },
  mounted() {}
};
</script>





