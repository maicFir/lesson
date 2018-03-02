import React from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import reducer from './reduexs/index.js'

import Count from './components/count.js';
import Counter from './components/counter.js'


//reducers
function fn(state = 0,action){
    switch(action.type){
        case 'INCREMENT':
           return state+1;
        case 'DECREMENT':
          return state-1
        default:
          return state
    }
}


// function addTodo2(text){
//    return {
//        type: 'ADD_TODO',
//        text
//    }
// }
// const action2 = addTodo2('learn redux');

// const store2 = createStore(addTodo2);

// store2.dispatch(action2);

// store2.subscribe(()=>{
//   console.dir(store2)
// })


//store控制数据层
// const store = createStore(fn)

const store = createStore(fn);//存储数据




let currentValue;
function handleChange() {
  let previousValue = currentValue
  currentValue = store2.getState()

  if (previousValue !== currentValue) {
    console.log('Some deep nested property changed from', previousValue, 'to', currentValue)
  }
}


// function todos(state = [],action){
//    switch(action.type){
//       case 'ADD_TODO':
//         return state.concat([action.text]);
//       default:
//         return state
//    }
// }

//action
function addTodos(text){
  return {
    type: 'ADD_TODO',
    text
  }
}
const store2 = createStore(reducer,{});//默认给初始值 state

document.body.onclick = function(){
    
    //改变state的方法
     store2.dispatch(addTodos('this is demo redux'))
     let tt = store2.getState()
     //console.log(tt.todos.map(item=>item));
     console.log(tt.todos.map((item)=>{
        return item
     }))

    // let unsubscribe = store.subscribe(handleChange)
  
}



class AppComponent extends React.Component {
  constructor(props){
      super(props);
      this.state = {
         name: '我是一个测试页面哦',
         val:0
      }
  }
  handleChange() {
    let currentValue = store.getState();
    console.log(currentValue);
    this.setState({
      name:''
    })
  }
  increment(){
    //改变state的方法action
     let t = store.dispatch({type:'INCREMENT',data:{value:2,name:"js"}});
     console.log(t)
     //订阅接口，每一次执行subscribe时，自定义回调函数的操作，每次使用subscribe方法，就会调用dispath方法
   
     store.subscribe(this.handleChange.bind(this))
 
  }
  decrement(){
    store.dispatch({type:'DECREMENT'});
    let val = store.getState();
    this.setState({
        val:val
      }) 
  }
  render() {
    const {list} = this.props;
    return (<div className="js-main">
      <Count 
         value={store.getState()}
         onIncrement={this.increment.bind(this)}
         onDecrement={this.decrement.bind(this)}
       />
      
       <Counter />
      <li>
        {list.map(function(item){
            return (<p key={item.id}>{item.name}</p>)
        })}
      </li>

    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    list: state
  }
}

export default connect(mapStateToProps)(AppComponent);
