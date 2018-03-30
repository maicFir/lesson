import React from "react";
import ReactDOM from "react-dom";
import Header from "../../component/header/Header";
import style from "../../style/common.styl";
import $ from 'jquery';
var getData = ()=>{
	$.ajax({
		type:'get',
		url:"/my-paoject/competitive/list.do",
		success:function(result){
			console.log(result)
		}
	})
}
const role = () => (
  <div>
    <h2 onClick={getData}>角色管理</h2>
  </div>
)

export default role;