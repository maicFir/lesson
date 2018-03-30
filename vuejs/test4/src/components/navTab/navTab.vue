<template>
    <div class="nav-top">
        <p>
            <a :href="'/#'+item" @click="tabClickfn(item)" :alt="item" v-for="(item,idx) in datalist" :key="idx" :class="hash == item?'active':''">{{item}}</a>
        </p>
    </div>
</template>

<script>


export default {
 
  props:['tablist'],
  data(){
      return{
          datalist: this.tablist, //父组件往子组件,
          hash: "html5"
      }
  },
  methods:{


      tabClickfn(item){
          this.hash = item;
          this.$emit("hashchange",item);   
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
    curentHash(){
        if(history.replaceState){
        var hash = this.getHash();
        var type = "";
        switch(hash){
            case "":
                hash = "html5";
                break;
            case "html5":
                alert("html5");
                type = 1;
            break;
            case "css3":
                alert("css3");
                type = 2;
            break;
            case "react":
                alert("react");
                type = 3;
            break;
            case "nodejs":
                alert("nodejs");
                type = 4;
            break;
            default:break;
        }
        //history.pushState({},'',hash+".html")
        //history.replaceState({},"","#"+hash+type);重新刷新页面会向hash值中添加一个type

        history.replaceState({},"","#"+hash)

        return hash;
      }
    }

  },
  //mounted只会调用一次
  mounted(){
      console.log("11111")
      this.hashChange();
     var curenthash = this.curentHash();
     this.hash = curenthash;
     this.$emit('hashchange',curenthash)
     
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




