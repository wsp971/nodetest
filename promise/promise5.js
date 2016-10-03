
// promise 的 then  方法每次返回都是一个新的promise 对象


var promise1=new Promise(function(resolve,reject){
    resolve(1);

})
var promise2=promise1.then(function(value){
    console.log(value);
    return 2; 
})
var promise3=promise2.catch(function(value){
    console.log(value);
})


console.log(promise1===promise2);
console.log(promise1===promise3);