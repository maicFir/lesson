
var express = require('express');

var router = express.Router();
//用户模型
var User = require("../models/user.js");

//分类首页
var homePage = require('../models/homepage.js');

//内容
var Content = require('../models/content.js');

//检测是否是管理员，全局
router.use(function(req,res,next){
    if(!req.userInfo.isAdmin){
        if(!req.userInfo.isAdmin){
        res.render("admin/error");
     }
     return;
    }
    next();
})

/* 首页 */
router.get('/',function(req,res){
    // console.log("userInof===",req.userInfo)
   
    res.render("admin/index",{
        userInfo:req.userInfo
    })
});
/**用户管理 */

/**
 * limit(2)获取表中数据的条数
 * skip(2)忽略数据的2条
 * 1: 1-2 skip 0   (page-1)*skip = skip;
 * 2: 3-4 skip 2   (page-1)*skip = skip
 */

 //let page = 1;//当前页
//  let limit = 2;
//  let skip = (page-1)*limit;
router.get('/user',function(req,res){
    //console.log(req.userInfo);
    //数据查询
    let curentPage = req.query.page*1||1;
    let limit = 2;//限度
    let skip = (curentPage-1)*limit;//跳页数
    let totalPage = 0;//总页数
    let arr = [];
    // console.log(User.count());
    User.count().then((count)=>{
        totalPage = Math.ceil(count/limit);//总页数
        curentPage = Math.min(curentPage,totalPage);//当前页不能超过最大totalpage

        curentPage = Math.max(curentPage,1);//当前页不能小于1
        
        for(let i=1;i<=totalPage;i++){
            arr.push(i);
        }
        User.find().limit(limit).skip(skip).then(function(user){
            //  console.dir(user)
            res.render("admin/user",{
                userInfo:req.userInfo,//传入模板中的内容
                user:user,
                curentPage: curentPage,
                totalPage: totalPage,
                name: 'user',
                arr:arr
            })
        })
    })
    
})

/**
 * 分类首页
 * 路由请求/homepage时，直接进入admin/homePage页面
 */
router.get('/homepage',function(req,res){
    let curentPage = req.query.page*1||1;
    let limit = 10;//限度
    let skip = (curentPage-1)*limit;//跳页数
    let totalPage = 0;//总页数
    let arr = [];

    homePage.count().then(function(count){
        totalPage = Math.ceil(count/limit);//总页数/一页最多显示的数目 = 有多少页
        curentPage = Math.min(curentPage,totalPage);//当前页不能超过最大totalpage
        curentPage = Math.max(curentPage,1);//当前页不能小于1
        for(let i=1;i<=totalPage;i++){
            arr.push(i);
        }
        //sort({_id:-1}) -1降序 1升序
        homePage.find().sort({_id:-1}).limit(limit).skip(skip).then(function(homepage){
            //传递数据到页面上
            res.render('admin/homepageIndex',{
                homepage:homepage,//输出到内容页的模板
                userInfo: req.userInfo,
                curentPage:curentPage,
                curentPage: curentPage,
                totalPage: totalPage,
                name:'homepage',
                arr:arr
            })
        })
    });
   
    
});
/**
 * 分类修改
 */
router.get('/homepage/edit',function(req,res){
    var id = req.query.id||'';//请求中链接的的id
    homePage.findOne({
        _id:id
    }).then(function(ct){
         if(!ct){
             res.render("admin/error",{
                 userInfo:req.userInfo,
                 message:'分类信息不存在'
             })
         }else{
             res.render('admin/edit',{
                 userInfo:req.userInfo,
                 editInfo:ct //保存数据库中已存在的名字
             })
         }
    })

});
/**
 * 保存修改分类编辑
 */
router.post('/homepage/edit',function(req,res){
   
    var id = req.query.id;
    var name = req.body.name;
    homePage.findOne({_id:id}).then(function(homePageCnt){
        if(!homePageCnt){//如果分类信息不存在
            res.render('admin/error',{
                userInfo:req.userInfo,
                message:"分类信息不存在",
                url:'admin/edit'
            });
            return Promise.reject();
        }else{
            //用户没有做任何修改
            if(name == homePageCnt.name){
                console.log(homePageCnt.name)
                res.render('admin/success',{
                    userInfo:req.userInfo,
                    message:"修改成功",
                    url:'/admin/homepage'
                });
                return Promise.reject();
            }else{
                return homePage.findOne({//homePage是new Scale
                    _id:{$ne:id},
                    name:name
                })
            }
        }
    }).then(function(homePageCnt){
        console.log("修改");
        if(homePageCnt){//如果数据库中存在
            res.render('admin/error',{
                userInfo:req.userInfo,
                message:"数据库中已经存在同名分类"
            });
            return Promise.reject();
        }else{
            return homePage.update(
                {_id:id},
                {name:name}
            )
        }
    }).then(function(){
        res.render('admin/success',{
            userInfo:req.userInfo,
            message:"修改成功",
            url:"/admin/homepage"
        })
    })

});
/**
 * 删除分类
 */
router.get('/homepage/delete',function(req,res){
    var id = req.query.id;//查询id
    //
    homePage.remove({_id:id}).then(function(resData){
        res.render('admin/success',{
            userInfo:req.userInfo,
            message:"删除成功",
            url:"/admin/homepage"
        })
    })
})

/**
 * 添加分类
 */
router.get("/homepage/add",function(req,res){
   res.render('admin/add',{
       userInfo:req.userInfo
   });

})
/**
 * 添加分类的保存，post请求
 */
router.post("/homepage/add",function(req,res){
    var name = req.body.name||"";//查询名称   因为是post请求，所以这里查询是req.body
    console.log(req.body)
    if(name == ''){
        res.render('admin/error',{
            userInfo:req.userInfo,
            message: "名字不能为空"
        });
        return;
    }
    
    //查询数据库中是否有相同的名字
    homePage.findOne({name:name}).then(function(resData){
        console.log("呵呵")
        if(resData){//数据库中已经存在
            res.render('admin/error',{
                userInfo:req.userInfo,
                message: "该分类已经存在了"
            })
            return Promise.reject();//阻止
        }else{
            return new homePage({name:name}).save();//保存该分类名称
        }
    }).then(function(newhomePage){
        console.log("嘻嘻嘻哈哈");
        res.render("admin/success",{//传入页面中的数据
            userInfo:req.userInfo,
            message:"分类保存成功",
            url: "/admin/homePage"
        })
    })

})

/*内容添加*/
router.get('/content',function(req,res){
    let curentPage = req.query.page*1||1;
    let limit = 10;//限度
    let skip = (curentPage-1)*limit;//跳页数
    let totalPage = 0;//总页数
    let arr = [];

    Content.count().then(function(count){
        totalPage = Math.ceil(count/limit);//总页数/一页最多显示的数目 = 有多少页
        curentPage = Math.min(curentPage,totalPage);//当前页不能超过最大totalpage
        curentPage = Math.max(curentPage,1);//当前页不能小于1
        for(let i=1;i<=totalPage;i++){
            arr.push(i);
        }
        //sort({_id:-1}) -1降序 1升序
        Content.find().sort({_id:-1}).limit(limit).skip(skip).populate(['category', 'user']).then(function(content){
            //传递数据到页面上
            res.render('admin/homepageIndex',{
                content:content,//输出到内容页的模板
                userInfo: req.userInfo,
                curentPage:curentPage,
                curentPage: curentPage,
                totalPage: totalPage,
                name:'content',
                arr:arr
            })
        })
    });

})


module.exports = router