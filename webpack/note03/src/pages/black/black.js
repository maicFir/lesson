import React from "react";
import ReactDOM from "react-dom";
import style from "../../style/common.styl";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class black extends React.Component{
	render(){
		let match = this.props.match;
		return(
				 <div>
    				<h2>黑名单 id:{match.params.id} type:{`${match.params.type}`}</h2>
 				 </div>
			)
	}
}
 
export default black;