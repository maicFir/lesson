

<script>
export default {
   data(){
       return {

       }
   },
   render(creatceElement){
       return creatceElement(
           'a',
           {
               attrs:{
                   title:"h5",
                   class:"h5",
                   href:"http://www.baidu.com",
                   on:{
                       click(){
                           alert(11111)
                       }
                   }
               }
           },
           [
               creatceElement('span',{class:"a1"},"a1"),
               creatceElement('span',{class:"a2"},"a2"),
           ]


       )
   }
}
</script>

