// 可以用Promise.resolve 和 Promise.reject 来生成一个promise对象

Promise.resolve(10).then(function(num){console.log(num)});


Promise.reject(new Error("妈的，这是个异常")).then(function(error){
    console.log("resolve");
    console.log(error);
},function(error){
    console.log("reject");
    console.log(error);
})

// reject catch
Promise.reject(new Error("抛出异常")).catch(function(err){
    console.log(err);
})