
var optfile = require('./model/optfile');

var  querystring  =  require('querystring');  //post需导入
var url = require('url');

function getRecall(req,res){
    res.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    function recall(data) {
        res.write(data);
        res.end('');//b不写则没有ht tp协议尾
    }
    return recall;
};
module.exports = {
    login:function (req,res){
        /*
        var  rdata  =  url.parse(req.url,true).query;
        if (rdata['email']!==undefined){
            console.log(rdata['email']);
            console.log(rdata['pwd'])
        }
        */
        //post方式接收参数
        var post = '';// 定义了一个post变量，用于暂存请求体的信息
        req.on('data',  function(chunk){        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            post  +=  chunk;
        });
        req.on('end', function () {//在end事件触发后，通过querystring.parse将post解析为真正的POST 请求
                post = querystring.parse(post);
                // console.log('email'+post['email']+'\n');
                // console.log('pwd:'+post['pwd']+'\n');
                // recall = getRecall(req,res);
                arr = ['email', 'pwd'];
                function recall(data) {
                    dataStr = data.toString();
                    for (var i=0;i<arr.length;i++) {
                        re = new  RegExp('{'+arr[i]+'}','g');
                        dataStr = dataStr.replace(re,post[arr[i]]);
                    }
                    res.write(dataStr);
                    res.end('');//b不写则没有ht tp协议尾
                }
                optfile.readfile('./views/login.html',recall);
        });


    },
    zhuce:function (req,res) {

        recall = getRecall(req,res);


        optfile.readfile('./views/zhuce.html',recall);
    },
    writefile:function (req,res) {
        recall = getRecall(req,res);

        optfile.writefile('./views/one.txt','我在入的文件',recall);
    },
    writeFileSync:function (req,res) {
        recall = getRecall(req,res);

        optfile.writeFileSync('./views/three.txt','同步方式',recall);
    },
    showimg:function (req,res) {
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        optfile.readImg('./imgs/suqin.jpeg',res);
    }
}