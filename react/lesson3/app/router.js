import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Demo from "./demo.js";
import styles from "./style/style.css";
class Routes extends React.Component{
	 constructor() {
  	  	super();
 	 }
	render(){

		return(<Router>
				<div>
					<Demo/>
				</div>

			</Router>)
	}

}
export default CSSModules(Routes, styles) 