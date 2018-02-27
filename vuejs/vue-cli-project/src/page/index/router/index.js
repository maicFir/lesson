import Vue from 'vue'
import Router from 'vue-router'

import main from '@/components/index/Commuity/index/main'
import baili from '@/components/index/Commuity/baili/baili'
import donghuang from '@/components/index/Commuity/donghuang/donghuang'
import taiyi from '@/components/index/Commuity/taiyi/taiyi'
import zhongkui from '@/components/index/Commuity/zhongkui/zhongkui'
import wangzhaojun from "@/components/index/Commuity/wangzhaojun/wangzhaojun"
import wuzetian from "@/components/index/Commuity/wuzetian/wuzetian"

import competiveIndex from '@/components/index/Competitive/competitive'
import Plan from '@/components/index/Plan/plan'
import Center from '@/components/index/Center/center'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'main',component: competiveIndex},
    {path: '/Community/',name: 'main',component: main},
    {path: '/Community/wangzhe',name: 'main',component: main},
    
    {path:"/Community/baili",name: 'baili',component:baili},
    {path:"/Community/donghuang",name: 'donghuang',component: donghuang},
    {path:"/Community/taiyi",name:"taiyi",component:taiyi},
    {path:"/Community/zhongkui",name:"zhongkui",component:zhongkui},
    {path:"/Community/wangzhaojun",name:"wangzhaojun",component:wangzhaojun},
    {path:"/Community/wuzetian",name:"wuzetian",component:wuzetian},

    {path:"/Competitive/",name: 'index',component: competiveIndex},
    {path:"/Plan/",name: 'plan',component: Plan},
    {path:"/Center/",name: 'center',component: Center},

  ]
})
