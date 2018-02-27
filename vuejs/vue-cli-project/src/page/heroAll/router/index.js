import Vue from 'vue'
import Router from 'vue-router'
import HeroList from '@/components/heroAll/heroList/heroList.vue'
import cikeHero from '@/components/heroAll/heroList/cikeHero.vue'
import fashiHero from '@/components/heroAll/heroList/fashiHero.vue'
import fuzhuHero from '@/components/heroAll/heroList/fuzhuHero.vue'
import sheshouHero from '@/components/heroAll/heroList/sheshouHero.vue'
import tankeHero from '@/components/heroAll/heroList/tankeHero.vue'
import zhanshiHero from '@/components/heroAll/heroList/zhanshiHero.vue'
import EquList from '@/components/heroAll/equiList/equiList.vue'

Vue.use(Router)
//路由设置
export default new Router({
  routes: [
    {path: '/',name: 'main',component: HeroList},
    {path: '/allhero',name: 'allhero',component: HeroList},
    {path: '/allhero/tankeHero',name: 'allhero',component: tankeHero},
    {path: '/allhero/zhanshiHero',name: 'zhanshiHero',component: zhanshiHero},
    {path: '/allhero/fashiHero',name: 'fashiHero',component: fashiHero},
    {path: '/allhero/cikeHero',name: 'cikeHero',component: cikeHero},
    {path: '/allhero/sheshouHero',name: 'sheshouHero',component: sheshouHero},
    {path: '/allhero/fuzhuHero',name: 'fuzhuHero',component: fuzhuHero},
    {path: '/equList',name: 'equlist',component: EquList},
  ]
})
