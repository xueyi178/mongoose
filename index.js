//引入数据库连接
require("./tools/conn_mongo");

//引入模型对象
var Student = require("./models/student");

//查询文档对象
Student.find({}, function (err, docs) {
    if(!err){
        console.log(docs)
    }
});
