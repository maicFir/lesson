<template>
    <div class="nav-top">
        <p>
            <a :href="'/#'+idx" @click="tabClickfn(item,idx)" :alt="item" v-for="(item,idx) in datalist" :key="idx" :class="hash == idx?'active':''">{{item.name}}</a>
        </p>
    </div>
</template>

<script>


export default {
 
  props:['tablist'],
  data(){
      return{
          datalist: this.tablist, //父组件往子组件,
          hash: 0
      }
  },
  methods:{


      tabClickfn(item,idx){
          this.hash = idx;
          this.curentHash(idx);
           this.$emit('hashchange',this.curentHash())  
      },
      hashChange(){
          let self = this;
          window.addEventListener("hashchange",function(e){
         //console.log(e)
            var event = e||window.event;
            var oUrl = "";
            event.oldURL.replace(/#(\S*)/g,function(a,b,c,d){
                oUrl = b;
                console.log("oldUrl",a,b,c,d)
            })
            var nUrl = '';
            event.newURL.replace(/#(\S*)/g,function(a,b,c,d){
                nUrl = b;
                console.log("newUrl",a,b,c,d)
            });
            if(nUrl == ''){
                console.log(1111)
            }
            self.$emit('hashchange',nUrl);
            self.hash = nUrl;
      })
    },
    getHash(){
        return window.location.hash.replace(/(^#)/,"")
    },
    changeTabColor(url){
        if(url == this.getHash()){
            this.isActive = true;
        }else{
            this.isActive = false;
        }
    },
    curentHash(idx){
        var hash = window.location.hash.replace(/(^#)/,"");
        if(!idx){
            idx = hash;
        }
        if(history.replaceState){
          history.replaceState({},"","#"+idx)
        };
        return idx
    }

  },
  //mounted只会调用一次
  mounted(){
      console.log("11111")
     this.hashChange();
     this.hash = this.curentHash();
     this.$emit('hashchange',this.curentHash())
     
  }
}
</script>
<style lang="stylus">
*{padding:0px;margin:0px;}
.nav-top{
    p{
        display:flex;
        justify-content center;
        text-align:center;
        flex-direction:row;
        a{
            display:block;
            flex:1;
           &.active{
               background:green;
           }
        }
    }
    
    
}
</style>




