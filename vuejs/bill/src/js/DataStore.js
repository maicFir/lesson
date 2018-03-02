export default {
	userId: "",
	start: 0, //0 未开启账单，1开启账单,后台默认给0
	isAgree: 1, //0 代表没勾选 1 代表已勾选,默认为1
	protol: 0, //默认为0 分享朋友圈后，再次加载这里就变成1 
	checked: true, //默认为true
	hashArr: ['phoneData','system','desk','softshop','game','thems','usercenter','ota','last'],
	type:0,//0 没同意，1同意
    isFirst: false, //第一次点击保存,
    isPage:0,//默认显示第一个slide
    keyshow:0,
	isSaveImg: 0, //0 没有保存，1保存图片,
	saveImgUrl: '',
	isshow:0,//点击保存
	time:1,//1s钟默认
	noTestURL: 'https://mceapi.gionee.com/ucs-api/yeardata.do', //正式环境域名
	testUrl:'/ucs-api/yeardata.do',
	keyUrl:'assets/img/keyword/15.png',
	defaultHead:'assets/img/glogo.png',
	url: null,//默认头像
	keyWord:"1",
	desc1:"鸿运到，走好运的时候就要来了",
    desc2:"遇人人助，遇事顺顺",
    data:{
		ac1:0,
		s1:'上午',
		s2:'11%-20%',
		d1:'微信,金立相册,爱奇艺',
		d2:'微信',
		d3:'72%',
		d4:'社交达人',
		g1:'7',
		g2:'开心消消乐®,恋舞OL-冬日恋曲,王者荣耀',
		g3:'85.71%',
		g4:'小有名气',
		a1:'67',
		a2:'新浪微博',
		a3:'唯品会',
		a4:'MOMO陌陌',
		a5:'94.76%',
		a6:'接近大佬',
		t1:'情感物语',
		t2:'',
		t3:'情感物语',
		t4:'99%',
		u1:'5.0',
		u2:'0.0',
		u3:'',
		u4:'',
		o1:'20170809115502',
		o2:'18W',
		m1:'12',
		m2:'12',
		m3:'22'
    }
}