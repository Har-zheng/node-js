var http = require('http');
var url = require('url');
var router = require('./router');
// var optfile = require('./model/optfile.js');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type': 'text/html; charset =utf-8'});
    if(request.url!=="/favicon.ico"){//清除第二次访问

        var pathname = url.parse(request.url).pathname;

        pathname = pathname.replace(/\//, ''); //替换掉前面的/

        console.log(pathname);

        if(router[pathname] !== undefined){

            router[pathname](request,response);

        }else{

            response.write('输入正确路由');
        }
        // console.log(router[pathname](request,response));



        console.log("主程序执行完毕");
    }
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000/");