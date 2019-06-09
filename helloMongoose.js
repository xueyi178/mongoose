/*
*   1.下载安装mongoose
*       npm i mongoose --save
*
*   2.在项目中引入mongoose
*       var mongoose = require("mongoose");
*
*   3.连接MongoDB数据库
*       mongoose.connect('mongodb://数据库ip地址:端口号/数据库', {useNewUrlParser: true});
*       如果端口号是默认的端口号(27017),则可以省略不写
*
*   4.监听mongoDB的连接状态
*       - 在mongoose对象中,有一个属性叫connection,该对象表示的就是数据库的连接,
*           通过监视该对象的状态,可以来监听数据库的连接与断开
*
*      数据库连接成功的一个事件
*      mongoose.connection.once("open",function(){}),
*
*      数据库连接断开的一个事件
*      mongoose.connection.once("close",function(){}),
*
*   5.断开数据库的连接(一般不需要调用)
*       - MongoDB数据库,一般情况下,只需要连接一次,连接一次以后,除非项目停止服务器关闭,否则连接一般不会断开
*       – mongoose.disconnect()
*
*   6.
*/

//引入mongoose
var mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true});

//监听数据库连接状态,mongoose一旦连接成功,自己不会断开
mongoose.connection.once("open",function(){
    console.log("数据库连接成功");
});

//监听数据库断开状态
mongoose.connection.once("close",function(){
    console.log("数据断开连接")
});

//断开数据库连接
//mongoose.disconnect();
