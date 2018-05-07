var http =  require('http');
// var User = require('./model/nodes_3.js');
var Teacher = require("./model/theacher.js");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if (request.url!=="/favicon.ico"){ //清除第二次访问
        teacher  = new Teacher("1","张三","20");
        teacher.enter();
        teacher.teach(response);
        response.end('');
    }
}).listen(8000);
console.log("server running at http://127.0.0.1:8000/");