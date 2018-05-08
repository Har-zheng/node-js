var http = require('http');

var url = require('url');

var router = require('./router');

// var exception = require('./model/Exception');
http.createServer(function (request,response) {
    if (request.url!=="/favicon.ico"){//清除第二次访问
        pathname = url.parse(request.url).pathname;
        // console.log(url.parse(request.url,true));
        pathname = pathname.replace(/\//,'');//替换掉前面的/
        try{
            router[pathname](request,response);
        }catch (err) {
            console.log('出错='+err);
            response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
            response.write(err.toString());
            response.end('');
        }
        console.log("server执行完毕");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000")