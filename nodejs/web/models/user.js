/**
 * 新建user.js表的模型
 */

var mongoose = require('mongoose');
//用户的Schema
var userSchema = require("../schemas/user.js");
//用户模型,创建一个User的表
var UserModel = mongoose.model('User',userSchema);
//输出模型
module.exports = UserModel;