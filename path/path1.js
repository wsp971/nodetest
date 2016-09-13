var path=require("path");

// normalize  规范化字符串路径
// windows 下 会将斜杠转换为反斜杠
// 
var path1="d://dist/wsp/a.html";

var path2=path.normalize(path1);
var path3="...//dist/wsp/test//";
console.log(path2);
console.log(path.normalize(path3));

// path.join(); 连接字符串路径,挺实用

var path4=path.join(__dirname,"wsp","test","test1");
console.log(path4);


// path.resolve([from],to)
//用途： 类似把一个个 路径操作用 连接起来比如：
// 把 to 解析为一个绝对路径
console.log(path.resolve("wsp/test/test1","wsp"));
console.log(path.resolve("wsp/test/foo/test1/a.png","..","test2","b.png"));


console.log(path.resolve(__dirname,"..","events"));
console.log(path.join(__dirname,"..","events"));
console.log(path.join(__dirname,"/baz/.."));



// path.isAbsolute(path);
// 
//判断路径是否为绝对路径
console.log(path.isAbsolute("./foo"));
console.log(path.isAbsolute(".."));
console.log(path.isAbsolute('/foo/bar'));
console.log(path.isAbsolute("foo/wsp.html"));
console.log(path.isAbsolute("foo/"));
console.log(path.isAbsolute("."));


console.log(path.isAbsolute("//server"));
console.log(path.isAbsolute("e://wsp"));
console.log(path.isAbsolute("bar"));



// path.relative 返回两个path的相对路径

console.log(path.relative(__dirname,"../module/module1.js"));


// path.resolve(from,path.relative(from,to))==path.resolve(to);

// path.dirname(p)
// 返回路径中的文件夹名称

console.log(path.dirname("/wsp/test/a.html"));

console.log(path.dirname("e:/wspace/sourcetree/a.txt"));


// path.basename(p,[ext])
// 返回路径中的最后一部分,也是蛮重要的api

console.log(path.basename("e:/wspace/source/a.txt",".txt"));
console.log(path.basename("e:/wspace/source/a.txt"));


// path.extname(p)
// 返回路径中的文件的扩展名

console.log(path.extname("e:/wspace/source/a.html"));


// path.sep
// 返回平台的路径分割工具
// windows 平台为 反斜杠
console.log(path.sep);


// path.delimiter

// 特定平台的路径分隔符
// windows 平台是分号

console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter));
