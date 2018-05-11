
function oneFun() {
    setTimeout(function () {

    },1000)
    console.log("oneFun")
};

function twoFun() {
    console.log("oneFun执行完毕")
};

oneFun();
twoFun();
console.log('主程序执行完毕');