const path = require('path');
const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');
const app = express();
const router = express.Router();
const port = 8010;

app.use(express.static(path.join(__dirname, './')));
router.all('/yeardata.do', (req, res) => {
	var data = {"code":200,"msg":"已同意查询","data":{"ac1":"365","s1":"","s2":"","d1":"微信,腾讯视频,QQ浏览器,金立相册,WiFi万能钥匙","d2":"微信","d3":"77%","d4":"社交达人","g1":"6","g2":"王者荣耀,天天斗地主（真人版）,欢乐捕鱼人","g3":"83.33%","g4":"小有名气","a1":"","a2":"","a3":"","a4":"","a5":"","a6":"","t1":"","t2":"","t3":"","t4":"","u1":"","u2":"","u3":"","u4":"","o1":"20171227205220","o2":"7W","m1":"","m2":"","m3":""},"url":null,"keyWord":"6","desc1":"事事如愿，笑口常开","desc2":"好彩自然来"};

	res.json(data);
})

app.use('/ucs-api', router)

app.listen(port, function() {
	console.log('server (dev) is now running on ' + port)
})