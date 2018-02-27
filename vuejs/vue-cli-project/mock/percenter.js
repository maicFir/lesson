let express = require('express')
let router = express.Router()
let Mock = require('mockjs')
let Random = Mock.Random

router.all('/list.do', (req, res) => {
  let data = {
    data:{}
  }
  var arrTel = ['13698123762','18798123762','15298123762','13798123762','18698123762']
  data.data = Mock.mock({
        imgIcon: Random.image('50x50'),
        name: Random.cword(2,5),
        mingwen:Random.integer(1,5),
        point: Random.integer(20,100),
        tel: arrTel[Random.integer(3,5)],
        paiming: Random.integer(20,30),
        hero:Random.cword(2,5),
        vitory: Random.integer(30,80),
        date: Random.date('yyyy-MM-dd')
    })
    res.json(data)
})

module.exports = router

