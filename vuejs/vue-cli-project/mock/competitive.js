let express = require('express')
let router = express.Router()
let Mock = require('mockjs')
let Random = Mock.Random

/**
 * {
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: '标题一',
                desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                url: '/component/cell'
            },
 *
 *
 */
router.all('/list.do', (req, res) => {
  let page = req.query.page||1;
  var hasNext = page>=5?false:true;
  
  let data = {
    data: [],
    total: 10,
    hashNext:hasNext,
    curpage: page,
    rows: 10,
    success:true
  }
  for (var i = 0; i < data.total; i++) {
    data.data.push(Mock.mock({
      id: Random.integer(60, 100),
      src: Random.image('60x60'),
      fallbackSrc: Random.image('60x60'),
      title: Random.cword(3, 5),
      desc: Random.cword(3, 6),
      url: Random.url(),
      date: Random.date('yyyy-MM-dd')
    }))
  }
  res.json(data)
})

module.exports = router

