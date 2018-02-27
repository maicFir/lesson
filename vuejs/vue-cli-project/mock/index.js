let express = require('express')
let router = express.Router()
let Mock = require('mockjs')
let Random = Mock.Random
/**
 *
 *[
    {
        imgs:['http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/152/152-bigskin-1.jpg'],
        timu:"第三题的答案是",
        isNumber:4,
        answer:[
            {cnt:'今年的周年限定皮肤已经曝光，其技能特效和那种花相关',istrue:1},
            {cnt:'今年的周年限定皮肤的品质属于',istrue:2},
            {cnt:'在王者荣耀里，鲁班七号-电玩小子的帽子上写了什么',istrue:3},
            {cnt:'新版本上线的第一个英雄，他的名字是',istrue:4}
        ]
    ]
 *
 *
 */
router.all('/list.do', (req, res) => {
  let data = {
    data: {
      list: []
    },
    pageList: 3
  }
  let answer = []
  for (var j = 0; j < 4; j++) {
    answer.push(
	Mock.mock({
  cnt: Random.cword(5, 8),
  'istrue|1': [1, 2, 3, 4]
})
)
  }
  for (var i = 0; i < data.pageList; i++) {
    data.data.list.push(Mock.mock({
      imgs: [Random.image('200x100', '#4A7BF7')],
      timu: Random.cword(3, 6),
      answer: answer,
      isNumber: Random.integer(1, 4),
      id: Random.integer(60, 100),
      date: Random.date('yyyy-MM-dd')
    }))
  }
  res.json(data)
})

module.exports = router

