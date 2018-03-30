import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component{
	constructor(props){
		super(props);
		//console.log(props);//super继承父组件传入的props,text,handleChangeText
		this.state = this.initState(props);


	}
	initState(props){
		return {
			dection: props.text
		}
	}
	defaultProps(props){
		console.log(props);
		console.log(1111);
	}
	//当父组传入的props发生变化时会激活此方法监控props的
	componentWillReceiveProps(nextProps){
		console.log(nextProps.text);
		let handle = nextProps.handeChageText;
	};
	componentWillMount(){
		
	}
	//子组件通过this.props调用父组件的方法
	changeText(e){
		var event = e.target||e.srcElement;
		this.setState({
			text:event.value
		});
		//console.log(this.state.text);
	}
	sure(){
		alert(this.props.text)
	}
	render(){
		let props = this.props;
		return(<div>
			<input type="text" placeholder="请输入颜色" onChange={props.handeChageText}/>
			<input type="button" value="确认" onClick={this.sure.bind(this)}/>
			<br/>
			<p>{props.text}</p>
		</div>)
	}



}

export default Input;