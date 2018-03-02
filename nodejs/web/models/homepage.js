/**
 * 新建homepage.js表
 */

 var mongoose = require('mongoose');
 //homepage模型的schame

 var homeSchema = require('../schemas/homepage.js')
 //用户模型,创建一个User的表
var HomePageModel = mongoose.model('Homepage',homeSchema);
//输出模型
module.exports = HomePageModel;