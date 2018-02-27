<template>
   <transition name="slide">
	   	<div id="wrapper" ref="scrollWrap">
	       <div class="scroller" ref="scroller">
	      		<ul ref="scrollList">
		  			<a :href="item.url" class="film-list" v-for="(item,i) in goodsList" :key="i" tag="li">
			    		<div class="side">
                            <div class="pic">
                                <img :src="item.src">
                            </div>
                        </div> 
                        <div class="content">
                            <h3>{{item.title}}</h3>
                            <p><span class="date">{{item.date}}</span></p>
                        </div>			    		
		  			</a>
	      		</ul>
	        </div>
	        <transition :name="loadingPosition">
	        	<Loading id="loading" 
	        		 v-show="showLoading"
	         		 :class='{pullDownLoading,pullUpLoading,center}'
	         		 ref="loading"
	         		 :loadingWord="loadingWord"
	       		></Loading>	     
	        </transition> 	             
	    </div>
   </transition>
</template>

<script>
import BScroll from 'better-scroll'
import Loading from 'components/loading.vue'
import $ from "jquery";
import './baili.less'

export default {
	name:"classify",
    data(){
   		return{
   			goodsList:[],
   			scroller:null,
   			center:true,
   			pullDownLoading:false,
   			pullUpLoading:false,
   			showLoading:false,					  			
   			currentPage:0,  
   			loadingWord:"正在加载",
   			loadingPosition:""	,
   			noMoreData:false	
   		}
   },
   components:{
   		Loading
   },
   methods:{
        filterDirectors(arr){
	        var name="";         
	        arr.forEach((item,i)=>{
	            if(i==arr.length-1){
	               name+=item.name
	            }else{
	               name+=item.name+" / "
	            }	            
	        })
	        return name                         
	    },
	    enable(){
	    	this.scroller&&this.scroller.enable()
	    },
	    disable(type){
	    	this.scroller&&this.scroller.disable()
	    },
	    finishPullDown(){
			this.scroller&&this.scroller.finishPullDown()
	    },
	    finishPullUp(){
			this.scroller&&this.scroller.finishPullUp()
	    },
	    refresh(){
			this.scroller&&this.scroller.refresh()
	    },
	    beforeFetch(type){	    	
	    	this[`pull${type}Loading`]=true;	
	    	this[`inPulling${type}`]=true;
	    	this.showLoading=true;
	    	if(type=="Down"){
	    		this.loadingPosition="top";
	    		this.loadingWord="正在下拉刷新";
	    		this.disable();
	    	}else if(type=="Up"){
				this.loadingPosition="bot";
		    	this.loadingWord="正在加载更多"
	    	}	    	
	    },
	    afterFetch(type){
			this.enable();
	    	this["finishPull"+type]();
	    	this.showLoading=false; 
	    	setTimeout(()=>{
	    		this[`pull${type}Loading`]=false;	
	   		 },300)    	    	
	    },
	    getData(){	    	
	    	this.showLoading=true;
	    	$.ajax("/wzbd/competitive/list.do")
	   	    	.then((res)=>{ 	  
	   	    		res=res.data;
	   	    		if(res.length>0){
		   	    		this.goodsList=res.data		   	    		
	   	    		}else{   	    			
	   	    			alert("没有数据");
	   	    		}
	   	    		this.showLoading=false;	
					this.center=false;	   	    						   	    			   	    			    		
	   	    	})
	   	    	.catch((error)=>{
	   	    		this.showLoading=false;	   	    		
	   	    		alert(error)
	   	    	})
	    },
	    pullDown(){   	    	
	    	this.beforeFetch("Down");  
	    	setTimeout(()=>{
		    	$.ajax('/wzbd/competitive/list.do')
			    	.then((res)=>{
				    	res=res.data;
				    	if(res.length>0){
				    		this.goodsList=res.data.concat(this.goodsList);	    		
				    	}else{   	  			
				    		console.log("已经到底了")
				    	}
				    	this.afterFetch("Down");				    			   	    	
			   	    })
			   	    .catch((error)=>{
			   	    	this.afterFetch("Down");
		   	    		console.log(error);
		   	    	})
		   	    	this.afterFetch("Down");
			   	},1000)     	  	
	    },
	    pullUp(){    	
	    	if(!this.noMoreData){
		    	this.beforeFetch("Up");
		    	setTimeout(()=>{
			    	$.ajax('/wzbd/competitive/list.do')
				    	.then((res)=>{ 	  
			   	    		res=res.data;
			   	    		if(res.length>0){
			   	    			this.goodsList=this.goodsList.concat(res);	  	    		
			   	    		}else{   	 	   	    			   			
			   	    			alert("已经到底了");
			   	    			this.noMoreData=true;
			   	    		}
			   	    		this.afterFetch("Up");	   	    				   	    			   	    			    	
			   	    	})
			   	    	.catch((error)=>{
			   	    		this.afterFetch("Up");	   
			   	    	})
		   	    },1000)
	    	}    	
	    }         
   },
   watch:{
   		goodsList(){
   			this.$nextTick(()=>{
   				this.scroller.refresh(); 
   			}) 	
   		}
   },
    mounted(){ 
		const {scroller,scrollWrap,scrollList}=this.$refs;
		/*初始化scroll*/
    	this.scroller = new BScroll(scrollWrap,{
    		click:true,
    		probeType:3,
    		pullDownRefresh:80,
    		pullUpLoad:-80
    	});

    	/*进入页面先获取数据*/
    	this.getData();
	
		/*下拉刷新*/
		this.scroller.on('pullingDown',()=> this.pullDown());

		/*上拉加载更多*/
		this.scroller.on('pullingUp',()=> this.pullUp());
   }  
}
</script>


