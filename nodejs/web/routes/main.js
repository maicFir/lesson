var express = require('express');

var router = express.Router();

//分类首页
var homePage = require('../models/homepage.js');

//内容
var Content = require("../models/content.js");

var data = {};

router.use(function(req,res,next){
    data = {
        userInfo:req.userInfo,
        homeNav:[],//分类内容
    }
    homePage.find().then(function(homeNav){
        data.homeNav = homeNav;
        next();
    })
})
/*
    首页
*/
router.get('/',function(req,res){
    console.log(data.homeNav);
    data.homepage = req.query.homepage||'';//这里的homepage就是页面上?homepage这个参数
    data.count = 0;
    data.page = Number(req.query.page||1);//当前页数
    data.limit = 10;//最大限度10条
    data.pages = 10;//总页数10条
    var content = {};
    if(data.homepage){
        content.homepage = data.homepage;   
    }
    Content.where(content).count().then(function(count){
        data.count = count;
        data.page = Math.min(data.page,data.pages);//当前页数
        data.page = Math.max(data.page,1);//不能下于1
        data.pages = Math.ceil(data.count/data.limit);//总页数
        var skip = (data.page -1)*data.limit;
        return Content.where(content).find().limit(data.limit).skip(skip).populate(['category','User']).sort({
            addTime: -1
        })
    }).then(function(contents){
        data.contents = contents;
        res.render("main/index",{//将数据传到页面中,index中
            userInfo:req.userInfo,
            homeNav:data.homeNav,//导航栏,
            content:data.contents
        })
    })
});
//子页面
router.get('/subContent',function(req,res){
    var contentId = req.query.contentId||'';
    Content.findOne({
        _id:contentId
    }).then(function(content){
        data.content = content;
        content.views++;
        content.save();
        res.render('main/view',data)
    })

})


//路由加载index页面时，直接输出main/index的页面
router.get('/index',function(req,res){
    res.render("main/index")
});

module.exports = router