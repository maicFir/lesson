import React,{Component} from "react";
var config = require('./config.json');

class Name extends Component{
	render(){
		return(<div>
			{config.name}	
		</div>)
	
	}
}


export default Name;
