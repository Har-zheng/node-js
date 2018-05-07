var User = require('./nodes_3');
function Teacher(id,name,age) {
    User.apply(this,[id,name,age]);
    this.teach=function (res) {
        res.write(this.name+"传可")
    }
}
module.exports = Teacher;