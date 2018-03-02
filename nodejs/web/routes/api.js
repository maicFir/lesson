var express = require('express');

var router = express.Router();

var userModel = require("../models/user.js");
var data = {
    success: true,
    code: '',
    message: ''
};
//注册
router.post('/user/register',function(req,res){
    //获取前端传送给后台的form相关参数
    var registName = req.body.registName;
    var setpassword = req.body.setpassword;
    var repassword = req.body.repassword;
    var email = req.body.email;
    console.log("email="+email)
    if(registName == ''){
        data.code = 0;
        data.success = false;
        data.message = "用户名不能为空";
        res.json(data);
        return;
    }
    if(setpassword == ''){
        data.code = 0;
        data.success = false;
        data.message = "密码不能为空";
        res.json(data);
        return;
    }
    if(repassword == ''){
        data.code = 0;
        data.success = false;
        data.message = "请填写密码";
        res.json(data);
        return;
    }
    if(repassword!=setpassword){
        data.code = 0;
        data.success = false;
        data.message = "密码输入不一致";
        res.json(data);
        return;
    }
    //查询数据库表中的相关字段
    userModel.findOne({
        registName:registName//查询注册用户名是否存在，在表中查询检测该字段名是否存在
    }).then(function(result){
        if(result){//如果为true,表示数据库中有该数据
            data.code = 4;
            data.success = false;
            data.message = "该用户已经被注册了";
            res.json(data);
            return; 
        };
        //保存新注册用户到数据库中
        var newUser = new userModel({
            registName: registName,
            setpassword: setpassword,
            repassword: repassword,
            email: email
        });
       
        return newUser.save();//向表中保存数据
    }).then(function(newUserInfo){
        console.log(newUserInfo);
        data.message = "注册成功";
        res.json(data);//输出json数据
    })
});

//登录
router.post('/user/login',function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    console.log(username,password)
    if(username == ''||password == ''){
        data.success = false;
        data.code = 0;
        data.message = "用户名和密码不能为空";
        res.json(data);
        return;
    };
    //查询用户名和密码是否存在
    userModel.findOne({
        registName:username,
        setpassword:password
    }).then(function(userInfo){
        //当用户名和密码与注册不一致时
        if(!userInfo){
            data.success = false;
            data.code = 0;
            data.message = "用户名或者密码错误";
            res.json(data);
            return;
        }else{//密码用户名正确
            data.success = true;
            data.message = "登录成功";
            data.code = 1;
            // console.log(userInfo)
            data.userLogin = {
                _id: userInfo._id,
                code:1,
                registName: userInfo.registName,
                isAdmin: userInfo.isAdmin
            };
            //保存在cookie中
            req.cookies.set('userInfo', JSON.stringify({
                _id: userInfo._id,
                registName: userInfo.registName,
                isAdmin: userInfo.isAdmin
            }));
            res.json(data);
            return;
        }

    })
})

module.exports = router;