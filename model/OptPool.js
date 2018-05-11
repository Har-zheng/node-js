var mysql = require('mysql'); //调用MySQl模块
function OPtPool() {
    this.flag = true; //s是否连接过
    this.pool = mysql.createPool({
        host:'localhost', //主机
        user:'root', //MySql认证的用户名
        password: 'zhz123456', //mysel认证用户密码
        database: 'RUNOOB',
        port: '3306' //端口号
    });
    this.getPool = function () {
        if (this.flag){
            //监听connection事件
            this.pool.on('connection',function (connection) {
                connection.query('SET SESSION auto_increment_increment=1');
                this.flag=false;
            });
        }
        return this.pool;
    }
}
module.exports = OPtPool;