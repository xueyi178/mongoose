/**
 *
 *  定义一个模块, 用来连接MongoDB数据库
 *
 * */

//引入mongoose
var mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true});

//监听数据库连接状态,mongoose一旦连接成功,自己不会断开
mongoose.connection.once("open",function(){
    console.log("数据库连接成功");
});

