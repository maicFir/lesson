<template>
    <div class="config-container">
        <div class="error-config" v-if="error == 0">
            <div class="header">答案错误</div>
            <p>是否使用消耗金币查询正确答案?</p>
            <div class="answer-btn">
                <div @click="isTureAnswer">是</div>
                <div @click="nextAnswer">否，进入下一题</div>
            </div>
        </div>
        <div class="end-config" v-if="error == 1">
            <div class="header-top">
                <p>本轮分数90</p>
                <p>正确90</p>
                <p>错误10</p>
            </div>
            <div class="is-again">
                <div class="again" @click="onceAgin">再来一局</div>
                <div class="return" @click="returnIndex">返回首页</div>
            </div>
        </div>
        <div class="go-on" v-if="error == 2">
             <div class="header-top">
                 <p>您正在答题，是否确认退出?</p>
            </div>
            <div class="is-again">
                <div class="again" @click="yesDati">是</div>
                <div class="return" @click="noDati">否，继续答题</div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
   name: 'diag',
   props:['isshow','index'],
   components: {},
   data(){
       return{
           checkFlag: this.isshow,
           idex: this.index,
           swiperList: [],
           error: 0
       }
   },
    mounted(){
        
    },
   methods:{
       isTureAnswer(){
           //this.checkFlag = false;
           this.$emit('checkStatus',false);//监控父组件自定义的方法
       },
       nextAnswer(){
        //    var idx = ++this.idex;     
        //    this.$emit('checkIndx',idx)
          this.$emit('checkStatus',false);
          this.$emit('tindex');
       },
       onceAgin(){
         
            let self = this;
            var arr = [];
            $.ajax({
                type: 'get',
                url: '/api/index/list.do',
            }).then((res)=>{
                console.log(res.data)
                self.$emit('dataList',res.data);
                self.$emit('checkStatus',false);
            })
            
            
            
            
       },
       returnIndex(){
           window.location.href="/exercise.html?type=1"
       }
   }
}
</script>
<style>
    .config-container{
        width:100%;
        height: 100%;
        position: absolute;
        background-color:rgba(1,1,1,0.6);
        top:0px;
        left:0px;
        z-index:100
    }
    .error-config,.end-config,.go-on{
        max-width: 300px;
        margin:0 auto;
        box-shadow: 1px 1px 1px 2px #e5e5e5;
        position: relative;
        top:20%;
        color:#666;
        background-color:#fff;
        border-radius: 5px;
    }
    .error-config p{
        margin:10px 0px;
        text-align: center;
    }
    .error-config>.header{
        text-align: center;
        padding:10px 0px;
    }
    .answer-btn{
        width:100%;
        padding:10px 5px;
    }
    .answer-btn div{
        display: inline-block;
        width:40%;
        text-align: center;
        margin: 0 10px;
        padding: 5px 0px;
        cursor: pointer;
    }
    .answer-btn div:first-child,.answer-btn div:last-child{
        border:1px solid #e5e5e5;
        border-radius:5px;
        -webkit-border-radius:5px;
    }
    .header-top,.is-again{
        display: flex;
        display: -ms-flex;
        justify-content:space-around;
        flex-direction:row;
        align-items: center;
        text-align: center;
    }
    .header-top{
         border-bottom:1px solid #ccc;
    }
    .header-top>p{
        flex:1
    }
    .is-again>div{
        border-radius: 5px;
        border:1px solid #ccc;
        padding:5px 8px;
        margin:10px 0px;
    }
</style>


