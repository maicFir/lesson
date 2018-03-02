import React from 'react';

import ReactDOM from 'react-dom';

//import Name from './demo.js';
//var div = require("./Genter.js");
import Header from "../src/components/header/Header.js";
import './style.css';
import styles from './style.css';//导入

var Elem = React.createClass({
	
	render:function(){
		return(<div>
			<Header/>
		</div>)
	}

})
ReactDOM.render(<Elem/>,document.getElementById("app2"));

//ReactDOM.render(<Name/>,document.getElementById("app3"));
