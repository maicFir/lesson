import React from "react";
import ReactDOM from "react-dom";
//import {Link} from 'react-router';
import {Link} from 'react-router-dom';
import style from './header.styl';//这里需要安装stylus 和stylus-loader
let navList = [{name:"刮刮乐",key:"home"},{name:"签到有奖",key:"prize"},{name:"任务达人",key:"task"}];
class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(<ul>
			{
				navList.map(function(item,key){
					//这里的${style['itemli']}在style.style必须是非全局方式，如果是:global{}方式，则页面css不会加在一个随机字符串
					return(<li key={key} className={`${style['itemli']}`}>
							<Link to={'/'+item.key}>{item.name}</Link>
						</li>)
				})

			}
		</ul>)
	}


}
export default Header;