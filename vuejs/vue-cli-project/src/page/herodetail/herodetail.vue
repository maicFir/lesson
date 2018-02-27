<template>
   <div class="herodetail">
       <x-header slot="header" :left-options="{backText: '返回'}"  class="header">
           英雄详情
        </x-header>
        <div :class="'avatar-img bg'+bgIndex">
            <div class="avatar-info">
                <p>{{skillArr[bgIndex]['name']}}</p>
                <p class="name">{{name}}</p>
                <div>
                    <p>生存能力:{{zhishu.shengcun}}%</p>
                    <p>攻击伤害:{{zhishu.gongji}}</p>
                    <p>技能效果:{{zhishu.fashu}}%</p>
                    <p>上手难度:{{zhishu.nandu}}%</p>
                </div>
                <div class="hero-story">
                    <a href="javascript:;" @click="show=true;type=1">英雄故事</a>
                    <a href="javascript:;" @click="show=true;type=0">历史上的ta</a>
                </div>
            </div>
        </div>
        <h5 class="skill-introduce">英雄皮肤</h5>
         <div class="skill-pifu">
                    <div v-for="(item,idex) in skillArr" :key="idex">
                        <img :src="item.img" alt="" width="67" height="67" @click="selectSkill(idex)">
                        <p>{{item.name}}</p>
                    </div>
        </div>
        <h5 class="skill-introduce">技能介绍</h5>
        <div class="skill-dec">

            <div class="skill-img">
                <img :src="item.p" width="71" height="71"  @click="index=idx"  v-for="(item,idx) in skillnewsArr" :key="idx">
            </div>

            <div class="skill-info" v-for="(item,idx) in skillnewsArr" :key="idx" v-if="idx == index">
                <p>
                    <span>{{item.n}}</span>
                    <span>{{item.c}}</span>
                    <span>{{item.d}}</span>
                </p>
                <p>{{item.tip}}</p>
            </div>


            <!-- <div class="skill-img">
                <img src="http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/13200.png" width="71" height="71" alt="" @click="index=0">
                <img src="http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/13210.png" width="71" height="71" alt="" @click="index=1">
                <img src="http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/13220.png" width="71" height="71" alt="" @click="index=2">
                <img src="http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/13230.png" width="71" height="71" alt="" @click="index=3">
            </div>
            <div class="skill-info" v-if="index==0">
                <p>甜蜜恋   风冷却值：14.5/13.3/12.1/10.9/9.7/8.5消耗：80</p>
                <p>小乔在敌人脚下召唤出恋之旋风，对敌人造成260/292/324/356/388/420（+62%法术加成）点法术伤害并击飞
小乔的主要控制技能，利用2技能击飞敌人能极大提高1技能的命中率，打出连招爆发伤害</p>
            </div> -->
       

        </div>

        <div v-transfer-dom>
            <x-dialog v-model="show" class="dialog-demo">
                <div class="img-box">
                    <p v-if="type==0">
                      本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江南。有传说，说曹操就是为了二乔而来。抢夺二乔，置于铜雀台。所以，唐朝诗人杜牧有诗道：“东风不与周郎便，铜雀春深锁二乔。”《三国演义》里诸葛亮游说孙权抗曹，也沿用了这个传说。  
                    </p>
                    <p v-else>
                    十多年前，江东名门乔氏诞生一对双生女婴时，曾掀起一场轩然大波。对精于魔道的家族而言，双胞胎是不吉利的。最终，双胞胎中的妹妹被送往稷下寄养。也许因为缺少家族的束缚，小乔并没有成为姐姐那样的完美女性，而是更加无拘无束的长大。
成长为少女的小乔终于被接回家中时，人人都嘲笑她的天真，同情心，以及不切实际的乐观——直到他们被她强大的法力所震慑。小乔天生就能将复杂的魔道运用自如，那种天赋就流淌在她的血液里，无需教导也挥之不去。
长辈们担忧暴露家族的秘密陷入恐慌，再度将小乔送往东海边的城镇，要让女孩在乡下终老。
没过多久，奇怪的疾病莫名开始在沿海流行。恐慌中的人们向封锁城镇的士兵发起冲击，最后演变成暴乱。而奉命前来镇压的，正是周瑜。
小乔敏锐意识到风的影响。她试图唤起和风吹散带有染病孢子的毒雾.。一片慌乱，她镇定施展的强大法术引起了周瑜的注意。他无情的将少女作为嫌疑犯羁押。两人的初次会面发生在简陋的大牢中，小乔少有固执的说服英俊的军官。整整一夜过去，周瑜终于相信傻气少女的空气传染理论，而她则彻底沦陷在一见钟情的爱慕中。
两人的合作不仅解救人们的生命，意外的收获是，周瑜开始警惕到数百里外的海面上的小岛和血族的传闻。几个月后瘟疫终于平息，周瑜返回吴国都城时，他已经无法违背心意丢下小乔独自离开了。对他背负重任的人生而言，小乔是照亮阴暗心海、最璀璨的星辉。
世人皆知，铁血都督周公瑾以坚定的意志和不苟言笑的冷酷著称。任何人都无法动摇他。在他如尺规般明确的人生中，只有小乔是违背人生信条的唯一意外。
“希望和奇迹是存在的！”
                    </p>
                   
                </div>
                <div @click="show=false">
                    关闭
                </div>
            </x-dialog>
       </div>
   </div>
</template>
<script>
import { XHeader, XDialog, TransferDomDirective as TransferDom } from "vux";
import $ from 'jquery';
export default {
  name: "herodetail",
  directives: {
    TransferDom
  },
  components: { XHeader,XDialog},
  data() {
      return{
          show: false,
          type: 1,
          index:0,
          bgIndex:0,
          skillArr:[
              {img:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106-smallskin-5.jpg',name:'缤纷独角兽'},
              {img:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106-smallskin-4.jpg',name:'纯白花嫁'},
              {img:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106-smallskin-3.jpg',name:'天鹅之梦'},
              {img:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106-smallskin-2.jpg',name:'万圣前夜'},
              {img:'http://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106-smallskin-1.jpg',name:'恋之微风'},
          ],
          bigskinArr:[
              'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-5.jpg',
              'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-4.jpg',
              'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-3.jpg',
              'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-2.jpg',
              'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-1.jpg'
        ],
        skillnewsArr:[],
        name:'',
        zhishu:{

        }
      }
  },
  methods: {
      //选择背景，切换背景
      selectSkill(idx){
         this.bgIndex = idx;
      }
      
  },
  mounted() {
    let id = window.location.search.split('=')[1];
      $.ajax({
          type: 'get',
          url:'/wzbd/herodetail',
          data:{
              id:id
          }
      }).then((result)=>{
         let skill = result.skill;
         this.name = result.name
         var arr = [];
         for(var i = 0;i<4;i++){
             arr.push({
                 c:skill[i+"_c"],
                 d:skill[i+"_d"],
                 n:skill[i+"_n"],
                 p:skill[i+"_p"],
                 t:skill[i+"_t"],
                 tip:skill[i+"_tip"],
             })

         }
         this.skillnewsArr = arr;
         this.zhishu = result.zhishu;
         console.log(arr)
      })
  }
};
</script>
<style lang="less">
@import "./herodetail.less";
</style>


