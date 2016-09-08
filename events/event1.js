// 此模块为node事件模块的练习

var EventEmit=require("events").EventEmitter;
var myEvent=new EventEmit();
myEvent.on("firstEvent",function(a,b){
    console.log("事件处理的第一个参数:"+a);
    console.log("时间处理的第二个参数:"+b);
    console.log("this 是 myEvent吗？ ："+ (this===myEvent));
});
console.log("触发第一个事件");
myEvent.emit("firstEvent",new Date().getTime(),"wsp");
console.log("再次触发一下：");
myEvent.emit("firstEvent",new Date().getTime(),"hello world");

console.log("设定一个只能触发一次的事件");

myEvent.once("onceEvent",function(){
    console.log("this is  a event only can emit once!!");
})

console.log("触发一次 onecEvent");

myEvent.emit("onceEvent");

console.log("再次触发一下onceEvent");

var flag=myEvent.emit("onceEvent");

if(!flag){console.log("该事件没有处理函数listener")}


console.log("获取firstEvent 事件的监听器数量");
// console.log(myEvent.listeners("firstEvent"));
console.log("当前有"+myEvent.listenerCount("firstEvent")+"监听器");
console.log("再次设定一个firstEvent事件的监听器");
myEvent.addListener("firstEvent",helloworld);

console.log("再次触发一下 firstEvent事件");
myEvent.emit("firstEvent",new Date().getTime(),Math.random());

function helloworld(){
    console.log("this is a firstEvent handler function");
}

console.log("获取myEvent 对象的 firstEvent 时间的监听器数组：");

console.log(myEvent.listeners("firstEvent").valueOf());


console.log("删除myEvent的 helloworld监听器");
myEvent.removeListener("firstEvent",helloworld);

console.log("获取myEvent firstEvent事件的监听器数量为"+myEvent.listenerCount("firstEvent"));
