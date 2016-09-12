var querystring=require("querystring");
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
};
// 序列化对象
var str=querystring.stringify(student,";",":");

console.log(str);

var wsp=querystring.parse(str,"=",";");

console.log(wsp);

// 中文转义
var str1= querystring.escape("王世平我爱你");
var str2=querystring.escape("wspwspwsp");
console.log(str1);
console.log(str2);

console.log(querystring.unescape(str1));