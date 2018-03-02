/**
 * 新建一个user表的数据结构
 */
//加载数据模块
var mongoose = require('mongoose');
//Schema模块,对应新建数据库表的字段名称
var Schema = new mongoose.Schema({
    registName: 'string',
    setpassword: 'string',
    repassword: 'string',
    email: 'string',
    isAdmin:{
      type: Boolean,
      default: false
    }

});
module.exports = Schema;