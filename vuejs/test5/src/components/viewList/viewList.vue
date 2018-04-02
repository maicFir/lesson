<template>
    <div class="pic-view-list">
        <a href="" class="item">
            <div class="pic-left">
                <div class="img">
                    <img src="https://dummyimage.com/800x800" alt="">
                </div>
                <div class="desc-info">
                    <p>线特厂且了能装一状段矿去管</p>
                    <p>
                        <span>75</span>
                        <span>
                            <i>抢</i>
                            <i>244</i>
                        </span>
                    </p>
                </div>
            </div>
            <div class="pic-right">
                 <div class="img">
                    <img src="https://dummyimage.com/800x800" alt=""/>
                </div>
                <div class="desc-info">
                    <p>dedewdewded</p>
                    <p>
                        <span>751</span>
                        <span>
                            <i>抢</i>
                            <i>4455</i>
                        </span>
                    </p>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
export default {
  data(){
      return{
          picList:[]
      }
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
      console.log("DEDEDEDDWE===="+Math.random()*10)
  }
}
</script>



<style lang="stylus">
div.pic-view-list>a{
    display:flex;
    flex-direction:row;
    padding:0px 5px;
    .pic-left,.pic-right{
        flex:1;
    }

}
.pic-left,.pic-right{
    >.img{
        height:157px;
        padding:10px 5px 10px 5px;
        img{
            width:100%;
            height:100%;
        }
    }
  >.desc-info{
      >p{
            max-width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        span{
            i{
                font-style:normal
            }
        }
      }
  }
}
</style>

