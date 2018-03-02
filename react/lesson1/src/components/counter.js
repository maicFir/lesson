import React from 'react';
import { ReactDom } from 'react-dom'
import {createStore} from 'redux'
import $ from 'jquery'

function counter(state,action){
    let {type,id,panelName} = action;
    switch(type){
        case 'ADD_COUNTER':
        if(panelName === 'A'){
            let ret = Object.assign({},state,{A:[...state.A,{id:new Date().getTime(),value:0}]});
            console.log(ret);
            return ret
        }else{
            let ret2 = Object.assign({},state,{B:[...state.B,{id:new Date().getTime(),value:0}]});
            return ret2
        }
        case 'IN_CREMENT':
            return Object.assign({},{
                A: state.A.map(elt=>{
                    if(elt.id == id){
                        elt.value++
                    }
                    return elt
                }),
                B:state.B.map(elt=>{
                    if(elt.id === id){
                        elt.value++
                    }
                    return elt
                })
            })
        case 'DECREMENT':
         return state[panelName].map(elt=>{
             if(elt.id == id){
                 elt.value--
             }
             return elt
         })
         default:
            return state
    }
}
let store = createStore(counter)
class Counter extends React.Component{
    
    constructor(props){
        super(props)
    }
    increment(){
        let self = this;
        if(this.value == 0) return;
        store.dispatch({
            type:'INCREMENT',
            id: self.id
        })
    }
    componentDidMount(){
        this.elt = $('<div class="ct"></div>');
        this.value = 0;
        let incrementBtn = this.incrementBtn = $('<input type="button" class="add"  style="padding:5px 10px;margin:0 5px;" value="+">');
        let decrementBtn = this.decrementBtn = $('<input type="button" class="redu" style="padding:5px 10px;margin:0 5px;" value="-">');
        let num = this.num = $( `<span>${this.value}</span>` );

        this.elt.append(decrementBtn, num, incrementBtn);
        incrementBtn.click( this.decrement.bind(this) );
        decrementBtn.click( this.increment.bind(this) );
        let strArr = [];
        $('.ADD').click(()=>{
            strArr.push(this.elt)
            $('.counter-container').append(strArr.map(item=>{return item}))
        })
    }
    decrement(){
        let self = this;
        if(this.value == 0) return;
        store.dispatch({
            type:'DECREMENT',
            id: self.id
        })
    }
    render(){
        return (<div className="counter">
             <a href="javascript:;" className="ADD">添加</a>
            <div className="counter-container">



            </div>
        </div>)
    }
}


export default Counter