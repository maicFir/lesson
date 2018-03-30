import React,{Component} from "react";
import reactDOM from "react-dom";
//高阶组件

export default (Part,name)=>{
	class MyComponent extends Component{
		constructor(){
			super();
			this.state = {
				content:""
			}
		}
		render(){
			return <Part content={this.state.content} />
		}
	}
	return MyComponent
}
