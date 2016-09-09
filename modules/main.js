// 本模块演示了 循环引用时的情况
// main.js 公共引用了 a.js  b.js
// a.js 
// b.js
// 
console.log("main start");
var b=require("./b.js");
var a=require("./a.js");
console.log("in main a.done=%j;b.done=%j",a.done,b.done);