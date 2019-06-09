// 引入mongoose
var mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true});

// 监听数据库连接状态,mongoose一旦连接成功,自己不会断开
mongoose.connection.once("open",function(){
    console.log("数据库连接成功");
});


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

//1. 通过Schema来创建Model
//2. Model代表的是数据库中的集合,通过Model才能对数据库进行操作
//3. mongoose.model(modelName, schema)
//4. modelName: 就是要映射集合的名字
//5. schema: 表示创建的Schema对象
//6. mongoose会自动把集合名变成复数
var StuModel = mongoose.model('student', stuSchema);

//1. 向数据库中插入一个文档
//2. StuModel.create(doc, function(ert){});
StuModel.create({
    name: "孙悟空",
    age: 18,
    gender: "male",
    address: "花果山"
},function(err){
    if(!err){
        console.log("插入成功")
    }
});


