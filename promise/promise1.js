function promiseTest(ready){
    return new Promise(function(resolve,reject){

        if(ready){
            resolve(1);
        }else{
            reject(2);
        }

    })
}

promiseTest(true).then(function(num){console.log(num)});

promiseTest(false).then(function(num){console.log(num)},function(num){console.log(num)});


promiseTest(false).catch(function(num){console.log(num)});



// 单独调用，不链式调用

var promise1=promiseTest(true);

promise1.then(function(num){
    return num*2;
});
promise1.then(function(num){
    return num*2;
})

promise1.then(function(num){
    return num*2;
});
promise1.then(function(num){
    console.log(num);
})


// 链式调用

var promise2=promiseTest(true);

promise2.then(function(num){
    return num*2;
}).then(function(num){
    return num*2;
}).then(function(num){
    console.log(num);
});




//模拟一个jquery,ajax  
function jquery(options){
    this.options=options;
};
var $=jquery;

$.fn=$.prototype;

$.fn.ajax=$.ajax=function(options){
    var requireRes=options.requireRes;
    console.log(options.data);
    setTimeout(options.success&&options.success(requireRes),2000);
}

$.ajax({
    url:"",
    dataType:"text/json",
    requireRes:{
        id:10
    },
    success:function(res){
        var id=res.id;
        $.ajax({
            url:"..",
            data:{a:1,b:2,id:id},
            success:function(res){
                // ...
            },
            error:function(res){
                // ...
            }

        })

    },
    error:function(res){

    }
});

// promise 改造嵌套的ajax 请求




// 可以直接使用Promise.resolve 或者 Promise.reject 方法来创建 Promise对象 然后调用then 方法


console.log("****************");
console.log(Promise);
Promise.resolve(10).then(function(num){console.log(num)});

Promise.reject(new Error("这是我的错！！！")).then(function(error){console.log(error)});


