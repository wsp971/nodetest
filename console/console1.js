// 本模块为 node api console 模块的练习


var a="wsp";
console.log("字符串格式输出%s",a);

var num=10;
console.log("数字格式输出%d",num);

var flag=true;
console.log("布尔型格式输出%j",flag);

// console.info 同 console.log
console.info([1,2,3,4]);

////////////////////////////////////
///////////////////////////////// //
////////////////////////////// // //
// 同console.log,但输出到 stderr 
// stderr是阻塞的，但strout是非阻塞的
// // // //
////////////////////////////// // //
///////////////////////////////// //
////////////////////////////////////
console.error("hello world");

// console.warn 同 console.error
console.warn("hello wsp ");


var student={   
    name:"王世平",
    age:25,
    form:{
        country:"china",
        province:"gansu"
    }
}

console.log("打印序列化对象用console.dir");
console.dir(student);

console.log("记录一段程序的耗时用 console.time 方法");

console.time("loop use time :");

for (var i = 100000000; i >= 0; i--) {
    ;
};

console.timeEnd("loop use time :");

console.log("打印程序当前位置的调用栈信息用 console.trace");
console.trace("errasdfadfa");  

console.log("hello after trace");



// console.assert 与 assert.ok 相同，用来断言判断
console.log("用console.assert 断言调试程序");

console.assert(true,"当前程序执行错误");
console.assert(false,"当前程序执行错误");

console.log("after assert ");