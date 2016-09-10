var util=require("util");

NODE_DEBUG="wsp";

util.debuglog("sdfadsfdas");


// util.format

var test1=util.format("wsp love %s","pxh");
console.log(test1);

// 占位符多余不会被替换
var test2=util.format("wsp  love %s and %s","pxh");

console.log(test2);

var age=util.format("王世平 今年 年龄是 %d",25);

console.log(age);

var student={   
    name:"王世平",
    age:25,
    isMan:true,
    wife:null,
    son:undefined,
    birthDay:new Date("1991-07-11"),
    form:{
        country:"china",
        province:"gansu",
        from:{
            planet:"eirth"
        }
    }
}

// 格式化输出对象
var student1=util.format("学校里有一个学生，他是%j",student);

console.log(student1);


// 单个百分号不会消耗参数
var percentage=util.format("hello %%%","sadf",2323,2323,student);
console.log(percentage);

var percentage1=util.format("%",12);

console.log(percentage1);

// 多余参数 util.format 会以空格连接参数
// 

var test2=util.format(1,2,3,4);
console.log(test2);

// util.log 打印出的日志并且 
// 
// 带有 时间
util.log("hello 这是用util.log 打印出的日志");

util.log([1,2,3,4,5]);

util.log("hello %s","王世平");

// utils.inspect 来实现对象的字符串表现形式
var wsp=util.inspect(student,{showHidden:true,depth:1,colors:true})
console.log(wsp);

var wsp=util.inspect(student,{colors:true});
console.log(wsp);


// util.isArray 来判断是否是数组 

var testArray=["wsp","pxj","yxy"];

console.log(util.isArray(testArray));

console.log(util.isArray(new Array()));

console.log(util.isArray({}));

console.log(new Array() instanceof Array);


// util.isRegEXP(OBJ) 判断是否是正则表达式

console.log("判断是否为正则表达式");
console.log(util.isRegExp(/wsp/));

console.log(util.isRegExp(new RegExp('wspwsp')));

console.log(util.isRegExp({}));


// util.isDate() 判断对象是否是Date 类型

console.log(util.isDate(new Date()));

console.log(util.isDate(Date()));

console.log(util.isDate({}));


// util.isError() 判断对象是否是Error类型
// 
// 

console.log(util.isError(new Error()));
console.log(util.isError (new TypeError()));
console.log(util.isError({}));


// 可以用 util.inherits 实现继承
// 只能继承父类原型的方法，构造函数内的方法不可以继承。


function  people(name,age){
    this.name=name;
    this.age=age;
    this.sayHello=function(){
        console.log("hello this is a function defined in constructor");
    }
}
people.prototype={
    getName:function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    },
    setName:function(name){
        this.name=name;
    },
    setAge:function(age){
        this.age=age;
    }
}

function Student(name,age,klass){
    people.call(this,name,age);
    this.klass=klass;
};



var wsp=new people()

util.inherits(Student,people);
var wsp=new Student("wsp",25,"计算机1004");



// console.log(util.inspect(wsp));
// console.log(util.inspect(wsp.__proto__));

console.log(wsp.getName());
console.log(wsp.getAge())
/////////////////////
// wsp.sayHello(); ///////////////////////
// 
// Student.super_ 指向 继承的function people
console.dir(Student.super_);

console.log(Student.super_===people)