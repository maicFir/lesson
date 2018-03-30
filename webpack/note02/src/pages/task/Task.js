import React from "react";
import ReactDOM from "react-dom";
import Header from "../../component/header/Header";
import style from "../../style/common.styl";
class Task extends React.Component{

	render(){
		return(<div className="task">
				<Header/>
				<div className={`${style['clear']}`}>
					我是任务达人
				</div>
			</div>)
	}
}
export default Task;