import React from "react";
import ReactDOM from "react-dom";
//import {Link} from 'react-router';
import {Link} from 'react-router-dom';
import style from './header.styl';//这里需要安装stylus 和stylus-loader
let navList = [{name:"刮刮乐",key:"home"},{name:"签到有奖",key:"prize"},{name:"任务达人",key:"task"}];
class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			size: "20px",
			bgColor:''
		}
	}
	componentWillMount(){
		this.setState({
			size: "30px"
		})
	}
	componentWillReceiveProps(nextProps,nextState){
		console.log("nextProps",nextProps);
		console.log("nextState",nextState);
	    if(nextProps.bgColor){
	    	this.state.bgColor = nextProps.bgColor;
	    }
	}
	//子组件改变父组件，通过父组件传入参数，回调函数方式
	changeSize(msg){
		console.log(this)
		this.props.changeSize(msg)
	}

	render(){
		let hash = window.location.hash;
		let bgColor = this.state.bgColor;
		let self = this;
		return(<ul>
			{
				navList.map(function(item,key){
					let isActive = "";
					let match = hash.match(item.key);//这里利用match方法匹配
					if((hash =="#/"&&key ==0)||(match&&match[0]==item.key)){
						isActive = "active";
					}
					//这里的${style['itemli']}在style.style必须是非全局方式，如果是:global{}方式，则页面css不会加在一个随机字符串
					return(<li key={key} className={`${style['itemli']}`}>
							<Link to={'/'+item.key} className={isActive} onClick={self.changeSize.bind(self,'60px')} style={{color:`${bgColor}`}}>{item.name}</Link>
						</li>)
				})

			}
		</ul>)
	}


}
export default Header;