import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var initData = {
  state: {
    activeKey: "jingxuan",
    tabNav:[
		{name:"王者英雄",key:"Community",path:"/Community/wangzhe"},
		{name:"百里玄策",key:"baili",path:"/Community/baili"},
		{name:"东皇太一",key:"donghuang",path:"/Community/donghuang"},
		{name:"太乙真人",key:"taiyi",path:"/Community/taiyi"},
		{name:"钟馗",key:"zhongkui",path:"/Community/zhongkui"},
		{name:"王昭君",key:"wangzhaojun",path:"/Community/wangzhaojun"},
		{name:"武则天",key:"wuzetian",path:"/Community/wuzetian"}
    ],
    swiperList:[
			{url:"javascript:void(0);",img:"http://dummyimage.com/320x120",title:"送你一朵花"},
			{url:"javascript:void(0);",img:"http://dummyimage.com/320x120",title:"一辆车"},
			{url:"javascript:void(0);",img:"http://dummyimage.com/320x120",title:"一次旅行"}
    ],
    chioseData:{
      swiperIndex:0
    },
    heroTabList:[
			{'name':"全部",key:"all",path:"/allhero"},
			{'name':"坦克",key:"tankeHero",path:"/allhero/tankeHero"},
			{'name':"战士",key:"zhanshiHero",path:"/allhero/zhanshiHero"},
			{'name':"法师",key:"fashiHero",path:"/allhero/fashiHero"},
			{'name':"刺客",key:"cikeHero",path:"/allhero/cikeHero"},
			{'name':"射手",key:"sheshouHero",path:"/allhero/sheshouHero"},
			{'name':"辅助",key:"fuzhuHero",path:"/allhero/fuzhuHero"},
    ],
    equipList:[
			{name:"全部",key:"all",path:"/equip"},
			{name:"辅助",key:"fuzhuEquip",path:"/equip/fuzhuEquip"},
			{name:"打野",key:"dayeEquip",path:"/equip/dayeEquip"},
			{name:"移动",key:"moveEquip",path:"/equip/moveEquip"},
			{name:"防御",key:"fangyuEquip",path:"/equip/fangyuEquip"},
			{name:"法术",key:"fashuEquip",path:"/equip/fashuEquip"},
    ]

  },
	// 获取数据
  getters:{
    getTabList(state){
      return state.tabNav
    },
    getKey(state){
      return state.activeKey
    },
    getSwiperList(state){
      return state.swiperList
    },
    getSwiperIndex(state){
      return state.chioseData.swiperIndex
    },
    getHeroList(state){// 英雄列表的tab
      return state.heroTabList
    },
    getequipList(state){
      return state.equipList
    }
  }
}

export default  new Vuex.Store(initData)
