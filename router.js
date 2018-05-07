
var optfile = require('./model/optfile');

module.exports = {
    login:function (req,res) {

        function  recall(data){

            res.write(data);

            res.end('');//不写则没有http协议尾

        }

        optfile.readfile('./views/login.html',recall);

    },
    zhuce:function (req,res) {

        function  recall(data){

            res.write(data);

            res.end('');//不写则没有http协议尾
        }

        optfile.readfile('./views/zhuce.html',recall);
    },
    writefile:function (req,res) {
        function recall(data) {
            res.write(data);

            res.end('');//不写则没有http协议尾
        }
        optfile.writefile('./views/one.txt','我在入的文件',recall);
    },
    writeFileSync:function (req,res) {
        function recall(data) {
            res.write(data);
            res.end('');//不写则没有http协议尾
        }
        optfile.writeFileSync('./views/three.txt','同步方式',recall);
    }
}