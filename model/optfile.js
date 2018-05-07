var fs = require('fs');

module.exports = {
    readfileSync:function (path) {  //同步读取
        var data = fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");
    },
    readfile:function (path,recall) {
        fs.readFile(path,'utf-8', function (err, data) {
            if (err){
                console.log(err);
            } else {
                console.log(data.toString());
                recall(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    writefile:function (path,data,recall) {//异步方式
        fs.writeFile(path,data,function (err) {
            if (err){
                throw err;
            }
            console.log('It\'s saves');//文件被保存
            recall('写文件成功')
        });

    },
    writeFileSync:function (path,data,recall) {//同步方式
        fs.writeFileSync(path,data);
        recall('写文件成功');
        console.log("同步写文件完成");
    },
    readImg:function (path,res) {
            fs.readFile(path,'binary',function (err, file) {
                if (err){
                    console.log(err);
                    return;
                } else {
                    console.log("输出文件");
                    res.write(file,'binary');
                    res.end();
                }
            })
    }
}