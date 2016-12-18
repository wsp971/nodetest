// 理解promise 的异步操作,看一下打印的顺序；只有then 方法开始才是异步操作



var promise=new Promise(function(resolve,reject){
    console.log(1);
    resolve();
    console.log(2);
});

promise.then(function(){
    console.log(3);
}).then(function(){
    console.log(4);
});

console.log(5);


