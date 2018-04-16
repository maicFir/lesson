<template>
    <div class="nav-top">
        <a :href="'/#'+idx" @click="tabClickfn(item,idx,item.type)" :alt="item.name" v-for="(item,idx) in datalist" :key="idx" :class="hash == idx?'active':''">{{item.name}}</a> 
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


      tabClickfn(item,idx,type){
          this.hash = idx;
          this.curentHash(idx);
          var parms = {
              id: this.curentHash(),
              type: type
          }
           this.$emit('hashchange',parms)  
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
            //self.$emit('hashchange',nUrl);
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
     var type = '';
     this.hash = this.curentHash();
     let hash = this.hash;
     switch(this.curentHash()*1){
         case 0:type="tuijian";break;
         case 1:type="lianyiqun";break;
         case 2:type="qiuku";break;
         case 3:type="nvzhuang";break;
         default:;break;
     }
     let parms = {
         id: hash,
         type: type,
         page: 1
     }
     this.$emit('hashchange',parms)
     
  }
}
</script>
<style lang="stylus">
@import "../../styles/mixins.styl";
@import "./navTab.styl";
</style>




