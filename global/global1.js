// global 类似于浏览器环境下window对象 属于整个node运行环境的全局对象

console.log(global);
console.dir(global);


// 
// process
//进程模块属于全局对象 
// 


console.log(process);
console.log(global.process===process)


// console 
// console 模块不用说了，也是

console.log(console);
console.log(global.console===console);


// Buffer
// Buffer 也属于全局对象

console.log(Buffer);
console.log(global.Buffer===Buffer);


// require 模块，用来加载模块的方法

// console.log(require);

// require.resolve() 用来返回所加载模块的路径
console.log(require.resolve("../console/console1.js"));

console.log("rquire.cache 为：");
console.log(require.cache);


// __filename   当前执行代码的文件名
console.log("打印__filename:");

console.log(__filename)


// __dirname  当前文件所在的路径

console.log("打印__dirname");
console.log(__dirname)


// module 模块  指代当前模块   exports 是module.exports 的一个引用
module.exports=function(){
    console.log("hai wo zhen de hao xiang  ni ");
}
exports.hello=function(){
    console.log("this is a exports function ");
}
console.log(module);

console.log("打印module.exports");

console.log(module.exports);


console.log("打印exports");
console.log(exports);

console.log("module.exports 是否是 exports"+exports===module.exports);

// 引入一个测试模块，这个模块分别通过 module.exports 和exports 导出一个方法
// 
// 
var testmodule=require("./test.js");
// 
// 先执行module.exports 对象

testmodule();
// 在执行module.exports 下挂的 b方法
testmodule.b();
// 在执行exports 下挂的方法，发现会报错，故有module.exports 对象 exports导出的方法就会失效
// testmodule.a();


// setTimeout setInterval  clearTimeout  clearInterval  都是跟浏览器端相同的方法


setTimeout(function(){
    console.log("this is a function in setTimeout");
},2000);

var count=100;
var a=setInterval(function(){
    if(count>0)    console.log(count--);
    else clearInterval(a);  
},1000);