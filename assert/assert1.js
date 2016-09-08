// 引入断言模块
var assert=require("assert");
// 加载todo类
var TODO=require("./todo");
var todo=new TODO();
todo.add("asdfasdf");
todo.add("adsfadfads");
console.log(todo.getCounts());
console.log(todo.getItemById(0));
todo.deleteALL();
console.log(todo.getCounts());
// var testValue="0";
// 用断言模块来做一个简单的单元测试


assert.equal(todo.getCounts(),0,"todo长度应该为0");

todo.add("hello world");

// assert.equal(todo.getCounts(),0,"todo长度应该为0");
// assert.equal(testValue,1,"值应该为1");

assert.notEqual(todo.getCounts(),0,"todo长度不应该为0");


// 主动抛出一个错误
assert.fail(todo.getCounts(),0,"",";");