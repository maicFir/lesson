
import Vue from 'vue';

import Index from '../components/index.vue';

import Vuex from 'vuex';
import './index.css'
Vue.use(Vuex);//使用该插件
const store = new Vuex.Store({
    state:{
        count:0,
        msg:'hello vue',
        dataList:[
            'html5','css3','react'
        ]
    },
    mutations:{//同步操作，直接操作state
        add:state=>state.count++,
        // decrement:state=>state.count--
        // add(state){
        //     state.count++;
        //     console.log("==",store.state.count)
        // },
        // add:function(state){
        //     state.count++;
        // },
        decrement(states,parms){
            console.log("states",states)
            states.count--;
            console.log(this);
            console.log('parms=',parms)
        }
    },
    getters:{
        getdataList(state){
            return state.dataList
        }
    },
    actions:{//异步操作multation,不是直接操作state
        add(context){//这个add与mutations中的add相同
            context.commit('add');
            console.log(context)
        }
    }
})


var vm = new Vue({
    el:'#main',
    data:{
        message:"hello js"
    },
    store,//将store注入子组件中
    template: "<Index />",
    components:{Index},
    mounted(){
        console.log('hello vuejs');
    }
  

})
/***
 * vuex:它是一个集中状态管理数据的工具，使得数据能达到共享，当我们存在不同实例时，有需要操作共同数据，则此时应考虑vuex数据状态控制，
 * 
 * 多个视图依赖同一状态，多个组件共享状态
 * 
 * vuex状态管理包括：
 *      state：驱动数据源,管理实例中data响应的数据
 *      view:以声明方式将state映射到视图
 *      action:响应view输入的状态变化
 * vuex 特点:
 *      vuex集中管理的状态是响应式的，当vue从vuex从获取的state发生变化时(this.$store.state.count)，对应组件的state也会发生变化
 *      不能直接改变state中的状态，只能通过store中的mutation改变state中的状态，
 * var strore = new Vuex.Store({   //store类比仓库一个容器
 *    state:{
 *      count:0//共享的数据源
 *    },
 *   mutation:{  //只能通过mutation去追踪state的状态变化,mutation中都是同步事务操作，如果要异步操作，则必须要用action
 *     add(state){
 *         state.count++
 *      }
 *   },
 *   getters:{ //像计算computed属性一样去获取state中的数据   在子组件中this.$store.getters.datalist
 *      datalist:function(state){
 *          return state.datalist
 *      }  
 *    },
 * 
 * })
 * 
 * 在vue中通过commit事件派发更改状态，this.$store.commit('add',pams) 利用commit方法向mutation中派发事件,并可传入参数
 * 
 * 在mutation中都是同步直接更改state的状态，如果要异步，则必须使用action，在action中接收一个mutation同名的方法，传入一个context参数
 * 直接context.commit('方法名') context->commit,dispatch,getters,state
 * 
 * 子组件中分发action，this.$store.dispatch("fn",data)
 * 
 * 
 */