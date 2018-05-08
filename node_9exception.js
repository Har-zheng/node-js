var http = require('http');
var url = require('url');
var router = require('./router');
var exception = require('./model/Exception');
http.createServer(function (request,response) {
    if (request.url!=="favicon.ico"){//清除第二次访问
        pathanme = url.parse(request.url).pathname;
        pathanme = pathanme.replace(/\//,'');//替换掉前面的/
        try{
            // router[pathanme](request,response);
            data = exception.expfun(10);
            response.write(data);
            response.end('');

        }catch (err) {
            console.log('aaaaa='+err);
            response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
            response.write(err.toString());
            response.end('');
        }
        console.log("server执行完毕");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000")