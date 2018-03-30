import React from "react";
import ReactDOM from "react-dom";
import style from "./app.css";
import Input from "./input";

/*
	首次：defaultProps-----gitInitialState----componentWillMount----render----componentDidMount

	当父组件的porps发生变化时，componentWillReceiveProps ====>shouldComponentUpdate================>componentWillUpdate===>render====>componentDidMount
								(监控父组件的state和props)    (监控state变化时，可阻止render的渲染)  (不允许修改state和props)
		      state发生变化时   shoudComponentUpdate  ====>componentWillUpdate
*/

class App extends React.Component{


	constructor(props){
		super(props);
		this.state = this.initState();

		console.log("1111")
	}
	initState(){
		return{
			name:"gionee",
			defaultBtn:"改变颜色",
			bgColor: '改变颜色'
		}
	}
	//当组件的props发生变化时，参数nextProps修改组件的props和state
	componentWillReceiveProps(nextProps){//这个方法只能在子组件中监控父组件传入的props值的变化
		//console.log(nextProps.name);
		console.log("2222");
	}
	//当state的属性发生变化时，激活该方法，return false,可阻止render渲染数据
	shouldComponentUpdate(){
		console.log(3333);
		return true;
	}
	//在接收新的props或者state后，进行渲染之前调用，不允许更改props和state
	componentWillUpdate(){
		console.log(4444)
	}
	//在render中渲染之前可以修改this.state
	componentWillMount(){
		console.log(5555);
		// this.getDOMNode()
	}

	//在render渲染完成,真实dom渲染完成后，可以加载其他类库，可以操作dom
	componentDidMount(){
		let headerDom = document.querySelector(".header");
		headerDom.style.width = "100%";
		headerDom.style.height = "100px";
		headerDom.style.border = "1px solid #ccc";
		console.log(6666)
	}

	//在虚拟dom加载完成后，componentDidMount中的所有定时器和事件监听应该移除
	componentWillUnmount(){
		console.log(7777)
	}

	changeBgColor(){
		let randomColor = ["red","green","blue","yellow","pink"];
		let num = Math.floor(Math.random()*5);
		let btnValue = this.state.defaultBtn;
		switch(num){
			case 0: btnValue = "red";break;
			case 1: btnValue = "green";break;
			case 2: btnValue = "blue";break;
			case 3: btnValue = "yellow";break;
			case 4: btnValue = "pink";break;
			default: btnValue = "改变颜色";break; 
		}
		this.setState({
			bgColor: randomColor[num],
			defaultBtn: btnValue
		})
	}
	handChange(evt){
	  let event = evt.srcElement||evt.target;
	  this.setState({
	  		bgColor: event.value
	  })
	}
	//render创建虚拟dom,只能有一个顶级组件，不能改变组件的状态，不能修改dom
	render(){
		console.log(8888)
		let state = this.state;
		return (<div className="container">
					<input type="button" value={state.defaultBtn} onClick={this.changeBgColor.bind(this)}/>
					<div className="header" style={{background:`${state.bgColor}`}}>{state.bgColor}</div>
					<Input handeChageText={this.handChange.bind(this)} text={state.bgColor}/>
			</div>)
	}



}

ReactDOM.render(<App />,document.getElementById("main"))