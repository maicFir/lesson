import React,{Component} from "react";
import ReactDOM from "react-dom";

//输入数字实现半分比转换

class Percentage extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			value:"0.00",
			prevalue:"0.00"
		}
	}
	handChange(e){
		let event = e||window.event;
		let target = event.target||event.srcElement;
		if(target.value<1&&target.value>0){
			this.state.prevalue = target.value*100;
		}else{
			this.state.prevalue = target.value*100;
		}
		this.setState({
			value: target.value,
			prevalue: this.state.prevalue
		})
	}
	render(){
		return(<div>
				<input type="number" min="0" value={this.state.value} onChange={this.handChange.bind(this)}/>
				<span>{this.state.prevalue}%</span>
			</div>)
	}
}
export default Percentage