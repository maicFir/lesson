
/**
 * 新建一个content的数据结构
 */
//加载数据模块
var mongoose = require('mongoose');
//Schema模块,对应新建数据库表的字段名称    
var Schema = new mongoose.Schema({
    //关联字段
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    //标题
    title:String,
    //用户id
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //添加时间
    addTime:{
        type: Date,
        default: new Date()
    },
    //阅读量
    views:{
        type: Number,
        default: 0
    },
    descrption:{
        type: String,
        default: ''
    },
    //评论
    comments:{
        type: Array,
        default:[]
    }

});
module.exports = Schema;