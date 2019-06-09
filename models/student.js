/**
 *  用来定义student模型
 *
 * */

//用入mongoose
var mongoose = require("mongoose");

// 将mongoose.Schema 赋值给我一个变量
var Schema = mongoose.Schema;

//1. 如果只需要配置类型,就传类型就好了
//2. 如果需要配置复杂内容,就传对象
//3. 创建Schema(模式对象),进行约束,有了Schema就有了数据库了
var stuSchema = new Schema({
    name:  String,
    gender: {
        type: String,
        default: "female"
    },
    age: Number,
    address: String
});


//定义模型,
var StuModel = mongoose.model("student", stuSchema);

//暴露StuModel对象
module.exports  = StuModel;
