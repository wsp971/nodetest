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



// promise 的 then  方法每次返回都是一个新的promise 对象


var promise1=new Promise(function(resolve,reject){
    resolve(1);
})
var promise2=promise1.then(function(value){
    console.log(value);
})
var promise3=promise2.catch(function(value){
    console.log(value);
})