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

/**
 *  Document和集合中的文档一一对应, Document是Model的实例
 *      通过Model查询到结果都是Document
 * */

//创建一个新的文档对象
var stu = new StuModel({
    name: "陪博白",
    age: 18,
    gendetr: "male",
    address: "碧波潭"
});

/***
 * Document的方法:
 *      Model#save([options], [fn])
 *          - 使用Document中的方法,向数据库插入数据

stu.save(function (err) {
    if(!err){
        console.log("保存成功")
    }
})*/


StuModel.findOne({}, function (err,doc) {
    if(!err){
        /**
         *  update(update, [options], [callback])
         *      - 修改对象
         *
         *  remove([callback])
         *      - 删除对象
         *
         */

        /*doc.update({$set:{age: 38}}, function (err) {
            if(!err){
                console.log("修改对象成功~~~~")
            }
        });*/


        /*doc.age = 58;
        doc.save();*/

       /* doc.remove(function(err){
            if(!err){
                console.log("刘雄再见")
            }
        });*/

        /**
         * get(name)
         *      - 获取文档中的属性值
         *
         * set()
         *      - 设置文档中的属性值
         *
         * id
         *      - 获取文档的_id的属性值
         *
         * toJSON() ****
         *      -  转换成JSON对象
         *
         * toObject()
         *      -  将document对象转换成一个普通的js对象
         *          注意: 转换成一个普通的js对象后, 所有的Document对象的方法或属性都不能使用了
         */
       // console.log(doc.get("age"));
        // console.log(doc.age);
       // doc.set("name", "朱小姐");
       // doc.name = "主教学";
        //console.log(doc)

       //console.log(doc._id);

        //var  o = doc.toObject();
        //console.log(o);

        //删除属性,不是删除数据库,是删除显示的属性
        // doc: 是一个普通的js的对象
        doc =  doc.toObject();
        delete doc.address;
        console.log(doc._id)
    }
})

