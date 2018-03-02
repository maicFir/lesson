import styles from '../css/index.styl';
import './adapterScreen';
import DataStore from './DataStore';
import $ from 'zepto';
import Swiper from 'swiper';
import util from './util';
import template from 'template';

let dataUrl = '/ucs-api/yeardata.do';

let AcountBill = {

	swipter: undefined,
	
	initialize() {
		console.log('11111')

		this.initSwipter();
	},

	initSwipter() {
		this.swipter = new Swiper('#J_pageWraper', {
			autoHeight: true, //高度随内容变化
			direction: 'vertical',
			freeMode: false,
			hashNavigation: {
				watchState: true
			},
			loop: false
		});
	}
}

AcountBill.initialize();