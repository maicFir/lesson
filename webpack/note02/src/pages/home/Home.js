import React from "react";
import ReactDOM from "react-dom";
import Header from "../../component/header/Header";
import style from "../../style/common.styl";

class Child1 extends React.Component{
	constructor(props){
		super(props);
		console.log(props.info);
		this.state = {
			msg: '来自children1的信息'
		}
	}
	componentDidMount(){
		this.props.transmsg(this.state.msg)
	}
	trans(){
		console.log(this);
		this.setState({
			msg:"hello child"
		})
		this.props.transmsg(this.state.msg);
	}
	render(){
		return(<div>
			<span className="child1" onClick={this.trans.bind(this)}>{this.props.info.size}</span>
		</div>)
	}
}
class Child2 extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			msg: props.msg
		}
	}
	render(){
		let msg = this.props.msg;
		return (<div>
			<span className="child2">{msg}</span>
		</div>)
	}
}
class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			size:"16px",
			bgColor: '',
			msg: ''
		}
	}
	changeColor(){
		//获取dom值
		let refs = this.refs;
		let title = refs.title.title;
		this.setState({
		    bgColor: "yellow"
		})
		console.log(title)
	}
	changeSize(size){
		this.setState({
			size: size
		})
	}
	transform(){
		this.transmsg("hello children1")
	}
	transmsg(msg){
		this.setState({
			msg:msg
		})
	}
	render(){
		return(<div className="home">
				<Header bgColor={this.state.bgColor} changeSize={(size)=>{this.changeSize(size)}}/>
				<div className={`${style['clear']}`}>
					我是刮刮乐
				</div>
				<Child1 info={{...this.state}} transmsg={(msg)=>{this.transmsg(msg)}} />
				<Child2 msg={this.state.msg}/>
				<a href="javascript:void(0);" onClick={this.changeColor.bind(this)} style={{fontSize:`${this.state.size}`}} title="改变字体颜色" ref="title">改变字体颜色</a>
			</div>)
	}
}
export default Home;