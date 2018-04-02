let express = require("express");

let app = express();
let config = require("../config/config.js");
let router = express.Router();

let Mock = require("mockjs");
let Random = Mock.Random;
router.all("/tuijian/list.do",function(req,res){
    let currentPage = req.query.page || 1;
    let hashnext = currentPage>=5?false:true;
   var data = {
        data:[],
        page:currentPage,
        hashnext:hashnext
   };
   for(var i=0;i<6;i++){
       data.data.push(Mock.mock({
           img:Random.image("800x800"),
           title: Random.cword(6,10),
           num1: Random.integer(1,100),
           num2: Random.integer(1,100)
       }))
   }
   res.json(data)
});

module.exports  = router;