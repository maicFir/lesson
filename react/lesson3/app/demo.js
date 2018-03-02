import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import 'rc-time-picker/assets/index.css';
import 'rc-calendar/assets/index.css';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import Picker from 'rc-calendar/lib/Picker';


import TimePickerPanel from 'rc-time-picker/lib/Panel';


import moment from 'moment';

const formatStr = 'YYYY/MM/DD';
const now = moment();
const timePickerElement = <TimePickerPanel />;
//import styles from "./style/style.css";
import styles from "./style/style.styl";
import Cnt1 from "./style/commpont/part1/cnt1.js";
import Cnt2 from "./style/commpont/part2/cnt2.js";
import Cnt3 from "./style/commpont/part3/cnt3.js";


function format(v) {
  return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
  return v && v[0] && v[1];
}


class Box extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			value: []
		}
	}
	

	onChange(value) {
		this.setState({ value })
	}

	render(){
		const state = this.state;
    	const calendar = (
     		<RangeCalendar
				showWeekNumber={false}
				dateInputPlaceholder={['start', 'end']}
				defaultValue={[now, now.clone().add(1, 'months')]}
				timePicker={timePickerElement}
			/> 
    	)
		return(	
				<div>
					<p className={styles.text}>javascript入门到放弃</p>	
					<p className="text">我是一个灰色的字体2</p>	
					<p styleName="text">我是一个灰色的字体</p>
					
					<p className="title">啊哈</p>
					<p styleName="title">啊哈2</p>
					<div className="box"></div>
					<p className="normal">字体大小</p>
					<p className="red">红色</p>
					<p className={styles.green}>路由</p>
					<div className="left">
						<p>
							<Link to="/1">
								还好遇见你
							</Link>
						</p>
						<p><Link to="/2">今天是周末呀</Link></p>
						<p><Link to="/3">react学习</Link></p> 
					</div>
					<div className="right">
						<Route exact path="/1" component={Cnt1} />
						<Route exact path="/2" component={Cnt2} />
						<Route exact path="/3" component={Cnt3} />
					</div>
					<h2>日历插件学习</h2>
					<Picker
        				value={state.value}
				        onChange={this.onChange.bind(this)}
				        animation="slide-up"
				        calendar={calendar}
      				>
					{
						 ({ value }) => {
				            return (<span>
			                <input
			                  placeholder="please select"
			               		
			                  disabled={state.disabled}
			                  readOnly
			                 className="form-control input-sm"
			                  value={isValidRange(value) && `${format(value[0])} - ${format(value[1])}` || ''}
			                />
                			</span>);
          				}
					}
					</Picker>
				</div>
		)
	}
}

export default CSSModules(Box, styles)