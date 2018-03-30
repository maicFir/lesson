import React from "react";
import ReactDOM from "react-dom";

class Time extends React.Component{

	constructor(){
		super()
		this.state = {
			date: new Date()
		}
	}
	componentWillMount () {
	   
	    this.timer = setInterval(()=>{
	    	this.setState({
	    		date: new Date()
	    	})
	    },1000)
    }
    componentWillUnmount(){
    	clearInterval(this.timer)
    }
	 render(){
	  	return(<div>
	  			<span>{this.timer}</span>
	  		</div>)
	  }

}

export default Time;