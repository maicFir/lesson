import React from "react";
import ReactDOM from "react-dom";
import style from "../../style/common.styl";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import black from "../black/black";
import prem from "../prem/prem";
import role from "../role/role"

const config = (macth)=>(
  <div>
    我是配置管理
  </div>
)
class Config extends React.Component{
  constructor(props){
    super(props);
    console.dir(props);//history location match staticContext
  }
  render(){
    //这里的props主要可以拿到父级组件所有的参数
    /*
      isExact:false;
      params
      path
      url
    */

    let match = this.props.match;
    console.dir(match);

    return (<div>
              <ul>
                <li>
                  <Link to={`${match.url}/config`}>
                    基本配置
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/black/1/2`}>
                    黑名单
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/prem`}>
                    权限管理
                  </Link>
                </li>
                 <li>
                  <Link to={`${match.url}/role`}>
                    角色管理
                  </Link>
                </li>
              </ul>
              <Route path={`${match.url}/config`} component={config}/>
              <Route path={`${match.url}/black/:id/:type`} component={black}/>
              <Route path={`${match.url}/prem`} component={prem}/>
              <Route path={`${match.url}/role`} component={role}/>
              <Route exact path={match.url} render={() => (
                <p>请选择配置管理</p>
              )}/>
          </div>
        )
  }
  
};

export default Config;