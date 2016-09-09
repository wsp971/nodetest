// 模拟了一个 学校 ，班级 ，老师，学生的模块
// index.js 入口文件
// klasss.js 班级
// teacher.js 老师
// student.js 学生




var klass=require("./klass");

function School(klass){
    this.klass=klass||[];
};
School.prototype.addKlass=function(klasses){
    klasses.forEach(function(item){
        klass.add(item[0],item[1]);
    })
}


var wsp_school=new School();

wsp_school.addKlass([["wsp",["高富帅","白富美"]],["屌丝",["矮穷丑"]]]);