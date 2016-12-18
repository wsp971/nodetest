var promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(3);
    },3000);
})

// promise1.then(function(value){console.log(value)});

var promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(2);
    },2000);
})

// promise2.then(function(value){console.log(value)});

Promise.all([promise1,promise2]).then(function(value){
    console.log(value);
})


// promise.all 可以等待 若干个promise 同时返回时，再依此调用回调函数。


function timerPromise(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(delay);
        },delay);
    })
};


// promise.race 正好相反，只要有一个返回就停止执行后面的promise then 方法了。。

Promise.race([
    timerPromise(1),
    timerPromise(64),
    timerPromise(128)
    ]).then(function(value){
        console.log(value);
    })