import React from "react";
import ReactDOM from "react-dom"
//import {Router,Route,hashHistory} from 'react-router';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Pointmgr from "./pointmgr/pointmgr";
import Activemgr from "./activemgr/Activemgr";
import Privilege from "./privilege/privilege";
import Config from "./config/config";



const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/pointmgr">会员积分</Link></li>
        <li><Link to="/activemgr">会员活动</Link></li>
        <li><Link to="/privilege">会员特权</Link></li>
        <li><Link to="/config">配置管理</Link></li>
      </ul>

      <Route exact path="/" component={Pointmgr}/>
      <Route exact path="/pointmgr" component={Pointmgr}/>
      <Route path="/activemgr" component={Activemgr}/>
      <Route path="/privilege" component={Privilege}/>
      <Route path="/config" component={Config}/>
    </div>
  </Router>
)


export default AppRouter;