let express = require('express');
let router = express.Router();
let Mock = require('mockjs');
let Random = Mock.Random;

router.all('/list.do',(req,res)=>{

	let data = {
		data: []
	}
	data.data.push(Mock.mock({
		id: Random.integer(60, 100),
		date: Random.date('yyyy-MM-dd')
	}));
	res.json(data)

});

module.exports = router;

