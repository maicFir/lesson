let express = require('express')
let router = express.Router()
let Mock = require('mockjs')
let Random = Mock.Random

router.all('/herosdata', (req, res) => {
  let data = {
    data: {
      list: []
    },
    number: 20
  }

  for (var i = 0; i < data.number; i++) {
    data.data.list.push(Mock.mock({
      id: Random.integer(100, 300),
      avatar: Random.image('93x42', '#FF6600'),
      name: Random.cword(2, 3),
      href: 'herodetail.html'
    }))
  }
  res.json(data)
})
router.all('/herodetail', (req, res) => {
  let data = Mock.mock({
    updateAt: Random.date('yyyy-MM-dd A HH:mm:ss'),
    'name|1': ['小乔', '周瑜', '诸葛亮', '后羿'],
    'avatar': [
      'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-5.jpg',
      'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-4.jpg',
      'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-3.jpg',
      'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/106/106-bigskin-3.jpg'
    ],
    keywards: Random.integer(2, 3),
    skill: {
      '0_c': Random.cword(2, 4),
      '0_d': Random.cword(2, 5),
      '0_n': Random.cword(2, 4),
      '0_t': Random.cword(4, 9),
      '0_tip': Random.cword(2, 10),
      '1_c': Random.cword(2, 9),
      '1_d': Random.cword(3, 8),
      '1_n': Random.cword(3, 4),
      '1_t': Random.cword(8, 10),
      '1_tip': Random.cword(8, 10),
      '2_c': Random.cword(8, 10),
      '2_d': Random.cword(2, 3),
      '2_n': Random.cword(2, 3),
      '2_t': Random.cword(3, 8),
      '2_tip': Random.cword(5, 7),
      '3_c': Random.cword(3, 6),
      '3_d': Random.cword(3, 5),
      '3_n': Random.cword(3, 5),
      '3_t': Random.cword(3, 8),
      '3_tip': Random.cword(6, 8),
      '0_p': 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/13200.png',
      '1_p': 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/13210.png',
      '3_p': 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/13220.png',
      '2_p': 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/13230.png'
    },
    zhishu: {
      fashu: Random.integer(10, 40),
      'gongji': Random.integer(10, 40),
      'nandu': Random.integer(10, 40),
      'shengcun': Random.integer(10, 40)
    },
    class: [
      '法师'
    ],
    id: Random.integer(100, 1200)
  })
  res.json(data)
})

module.exports = router
