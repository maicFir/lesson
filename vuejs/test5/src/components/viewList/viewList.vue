<template>
 <div class="list-container">
    <div class="pic-view-list" v-for="(item,idx) in navTablist" :key="idx">
        <a href="" class="item" v-for="(items,i) in picList" :key="i" v-if="type == item.type">
            <div class="pic-left">
                <div class="img">
                    <img v-lazy="items.img" alt="">
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
import $ from 'jquery';
export default {
  props:['picList','type'],
  data(){
      return{
          navTablist: this.$store.getters.getdataList
      }
  },
  created(){
     
     
  },
  updated(){
      
      this.loadlistData();
  },
  methods:{
      loadlistData(){
           console.log("dgyededed==="+Math.random()*10)
      }
  },
  mounted(){
      
       
  }
}
</script>





