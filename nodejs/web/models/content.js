/**
 * 新建content.js表
 */

var mongoose = require('mongoose');
//homepage模型的schame

var ContentSchema = require('../schemas/content.js')
//用户模型,创建一个User的表
var ContentPageModel = mongoose.model('Content',ContentSchema);
//输出模型
module.exports = ContentPageModel;