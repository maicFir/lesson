/**
 * 新建一个homepage的数据结构
 */
//加载数据模块
var mongoose = require('mongoose');
//Schema模块,对应新建数据库表的字段名称    
var Schema = new mongoose.Schema({
    //分类名称
    name:String

});
module.exports = Schema;