import React from "react";
import ReactDOM from "react-dom";
import Header from "../../component/header/Header";
import style from "../../style/common.styl";
class Prize extends React.Component{

	render(){
		return(<div className="Prize">
				<Header/>
				<div className={`${style['clear']}`}>
					我是签到有奖
				</div>
			</div>)
	}
}
export default Prize;