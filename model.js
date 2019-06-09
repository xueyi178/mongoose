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
//7. model是一个构造函数的方法, model创建的对象就是document
var StuModel = mongoose.model('student', stuSchema);

/**
*   - 有model后, 我们就可以对数据库进行增删改查的操作了
*       Model.create(doc(s), [callback]);
*       - 用来创建一个或者多个文档,并添加到数据库中
*       - 参数
*           doc(s): 可以是一个文档对象,也可以是一个文档对象的数据
*           callback: 当操作完成后,调用的回调函数
* */

/*StuModel.create([
    {
        name: "沙和尚",
        age: 29,
        gender: "male",
        address: "流沙河"
    }
],function (err) {
    if(!err){
        console.log(arguments);
    }
});*/

/**
 * 1. 查询的方法:
 *      - Model.find(conditipns, [projection], [options], [callback])
 *          查询符合条件的文档, 返回的一个数组
 *
 *      - Model.findById(id, [projection], [options], [callback])
 *          根据文档的id属性来查询文档
 *
 *      - Model.findOne([conditipns], [projection], [options], [callback])
 *          查询符合条件的第一个文档,总会返回一个具体的文档对象
 *          conditipns  查询条件
 *          projection  投影查询 需要获取到的字段
 *              - 两种方式
 *                  {name:1, _id:0}
 *                  "name -_id"
 *          options  查询选项[skip limit]
 *          callback 回调函数,查询结果会通过回调函数返回
 *                      回调函数必须传,如果不传回调函数,压根不会去查询
 */
/*
    //查询所有
    StuModel.find({},function (err, docs) {
    if(!err){
        console.log(docs)
    }
});*/

/*
    //设置投影查询
    StuModel.find({},{name: 1, _id:0},function (err, docs) {
    if(!err){
        console.log(docs)
    }
});*/

/*
    //投影查询: -表示不显示,不写-表示显示
    StuModel.find({},'name age -_id',function (err, docs) {
    if(!err){
        console.log(docs)
    }
});*/

/*
    //skip和limit查询
    StuModel.find({},'name age -_id',{skip: 3,limit: 1},function (err, docs) {
    if(!err){
        console.log(docs)
    }
});*/


/*
     查询符合条件的第一个文档,总会返回一个具体的文档对象
    StuModel.findOne({},function (err, doc) {
    if(!err){
        console.log(doc)
    }
});*/

  /* // 根据id去查询文档
    StuModel.findById("5cfcbb3c5e19fd2f44f1ab6f",function (err, doc) {
    if(!err){
        console.log(doc)
        //通过find查询出的结果,返回的对象,就是Document, 文档对象
        //Document对象就是Model的实例
        console.log(doc instanceof StuModel)
    }
});*/

/**
 *
 * 修改的方法:
 *      Model.update(conditions, doc, [options], [callback])
 *      Model.updateMany(conditions, doc, [options], [callback])
 *      Model.updateOne(conditions, doc, [options], [callback])
 *          - 用来修改一个或者多个文档
 *          - 参数
 *              conditions  查询条件
 *              doc  修改后的对象
 *              options  配置参数
 *              callback  回调函数
 *      Model.replaceOne(conditions, doc, [options], [callback])

 修改孙悟空的年龄为18
StuModel.updateOne({name: "孙悟空"}, {$set: {age:18}}, function (err, doc) {
    if(!err){
        console.log("修改成功",doc)
    }
}); */


/**
 * 删除的方法:
 *      Model.remove(conditions, [callback])
 *      Model.deleteOne(conditions, [callback])
 *      Model.deleteMany(conditions, [callback])

StuModel.remove({name: "孙悟空"},function (err, doc) {
    if(!err){
        console.log("删除成功",doc)
    }
});*/


/**
 * Model.count(conditions, [callback])
 *  - 统计文档对象的数量
 */
StuModel.count({},function (err, doc) {
    if(!err){
        console.log("统计数量",doc)
    }
});
