import React from "react";
import ReactDOM from "react-dom"
//import {Router,Route,hashHistory} from 'react-router';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import home from "./home/Home";
import prize from "./prize/Prize";
import task from "./task/Task";
import Header from "../component/header/Header";
//注意这里的exact的作用，只允许唯一单独存在
class AppRouter extends React.Component{

	render(){
		return(<Router >
			<div className="main-app">
				<div className="container">
					<Route exact path="/" component={home}></Route>
					<Route exact path="/home" component={home}></Route>
					<Route exact path="/prize" component={prize}></Route>
					<Route exact path="/task" component={task}></Route>
				</div>
			</div>
		</Router>)
	}
}
export default AppRouter;