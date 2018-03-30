import React,{Component} from "react";
import ReactDOM from "react-dom";
import style from "./app.css";
import Example from "./example"
import Percentage from "./Percentage";
import Time from "./Time";
import Str from "./Str";

import SayHello from "./sayHello";




class ChangeStatus extends Component{
	constructor(props){
		super(props);
		this.state = {
			isFlag:false,
			count:0
		}
	}
	handleChange(){
		this.setState((prevState)=>{
			return {
				isFlag:!this.state.isFlag,
				count: prevState.count+1
			}
		})
	}
	render(){
		let parms = this.props.dec||{
			like:'点赞',
			unlike: '已赞'
		}
		return(<div>
				<button onClick={this.handleChange.bind(this)}>
					{this.state.isFlag?parms.like:parms.unlike}
				</button>
				<span>{this.state.count}</span><br/>
				<input type="button" value="点我" onClick={()=>console.log(111)}/>
			</div>)
	}
}




class App extends React.Component{

	constructor(props){
		super(props);
	}	
	//render创建虚拟dom,只能有一个顶级组件，不能改变组件的状态，不能修改dom
	render(){
		let state = this.state;
		let obj = {
			like:'喜欢',
			unlike: '不喜欢'
		};
		let userInfo = [
			{username:'keke',age:20,sex:0},
			{username:"jekyl",age:18,sex:1},
			{username:"bobo",age:15,sex:0}
		];
		let userElem = [];
		for(let user of userInfo){
			userElem.push(<div>
					<span>姓名:{user.username}</span>,
					<span>年龄:{user.age}</span>,
					<span>性别:{user.sex?"女":"男"}</span>
				</div>)
		}
		return (<div className="container">
					<ChangeStatus dec={obj}/>
					<Example /><br/>
					{
						[
							<span>react.js</span>,
							<span>is</span>,
							<span>good</span>
						]
					}<br/>
					{
					   userElem
					}
					<br/>
					{
						userInfo.map((user,i)=>{
							return(<div key={i}>
									<span>姓名:{user.username}</span>
									<span>年龄:{user.age}</span>
									<span>性别:{user.sex}</span>
								</div>)
							})
					}

					<Percentage />
					<br/>
					<Time />
					<br/>
					<Str/>

			</div>)
	}



}

ReactDOM.render(<App />,document.getElementById("main"))