// proces 是一个全局对象，可以在任何地方访问到他，他是 EventEmitter 的一个实例


// process.Codes;
// 程序执行的状态值，0 为正常结束 其他为异常

// console.log(process);
// console.log(process.Codes);


// 事件"exit"

process.on("exit",function(){
    setTimeout(function(){
        console.log("主事件循环已经停止，所以不会执行");
    }, 1000);
    console.log("退出前执行");
});

// process.stdin
// 一个指向标准输入流的可读流



// process.stdout
// 一个指向标准输出流的一个可写的流

// 一个console.log 的简单实现
console.log1=function(d){
    process.stdout.write(d+'\n');
}

console.log1("hello world");

// process.stderr
// 一个指向标准错误流的可写的流


// process.argv
// 
// 一个包含命令行参数的数组 
// 
process.argv.forEach(function(val,index,array){
    console.log(index+""+val);
});


// process.execPath
// 开启当前进程这个可执行文件的绝对路径

console.log(process.execPath);


// process.abort()
// 触发node abort 事件

// process.chidir()
// 改变当前进程的工作目录 若操作失败则抛出异常


// process.cwd()
// 返回当前进程的工作目录

console.log(process.cwd());


// process.exit([code])
// 退出并返回失败的转台 省略时返回0
// 
// 


// process.version
// 暴露编译时存储版本信息的变量NODE_VRESION的值
console.log("当前版本"+process.version);


// process.versions
// 暴露node 以及其依赖包版本信息的属性

console.log(process.versions);


// process.config
// 一个包含用来编译当前node.exe 的配置选项的对象
console.log("process.config:");
console.log(process.config);


// process.kill(pid);
// 杀死目标进程


// process.pid
// 当前进程的pid

console.log(process.pid);

// process.title
// 当前进程的进程名

console.log(process.title);


// process.arch 返回处理器架构
console.log(process.arch);


// process.platform
// 当前程序的运行平台

console.log(process.platform);