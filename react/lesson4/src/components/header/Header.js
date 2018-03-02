import React from 'react';

import ReactDOM from 'react-dom';
import CSSModules from "react-css-modules";
import styles from './header.styl';



const arr = [
	{name:"xiaobai",age:"20",info:"i'm come form beijing"},
	{name:"timo",age:"18",info:"i'm come form hebei"},
	{name:"qq",age:"15",info:"i'm come form shanghai"},
];
const btn = {
	name:"改变颜色",
	color:"green"
};
class Header extends React.Component{
	changeColor(){
		
	}
	render(){
		return(<div className="headerWrapBox">
			<div className={styles.header}>
				<div className={styles.headerLogo}>
					
				</div>
				<div className={styles.headerTel}>
					<p>下午好,135***26573</p>
				</div>
				<div className={styles.headerBtn}></div>
			</div>
			
		</div>)
	}
}
export default CSSModules(Header,styles);
