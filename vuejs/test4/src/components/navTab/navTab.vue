<template>
    <div class="nav-top">
        <p v-for="(item,idx) in datalist" :key="idx">{{item}}</p>
    </div>
</template>

<script>

export default {
 
  props:['tablist'],
  data(){
      return{
          datalist: this.tablist //父组件往子组件
      }
  },
  mounted(){
      console.log(this._props.tablist)
  }
}
</script>
<style lang="stylus">
*{padding:0px;margin:0px;}
.nav-top{
    display:flex;
    justify-content center;
    text-align:center;
    flex-direction:row;
    p{
        flex:1
    }
}
</style>




