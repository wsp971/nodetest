var teacher=require("./teacher.js");
var student=require("./student.js");

function add(teachername,students){
    teacher.add(teachername);
    students.forEach(function(item){
        student.add(item);
    });
}

add("wangshiping",["高富帅","白富美"]);

exports.add=add;