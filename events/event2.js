var EventEmitter=require("events").EventEmitter;


var myEvent=new EventEmitter(); 

myEvent.setMaxListeners(14 );

myEvent.on("hello",function(){
    console.log("hi wsp;");
});
myEvent.on("hello",function(){
    console.log("hi pxj;");
});
myEvent.on("hello",function(){
    console.log("hi yxy;");
});
myEvent.on("hello",function(){
    console.log("hi wsq;");
});
myEvent.on("hello",function(){
    console.log("hi wsp;");
});
myEvent.on("hello",function(){
    console.log("hi wsp;");
});
myEvent.on("hello",function(){
    console.log("hi wsp;");
});
myEvent.on("hello",function(){
    console.log("hi wsp;");
});
myEvent.on("hello",function(){
    console.log("hi wsp;");
});
myEvent.on("hello",function(){
    console.log("hi wsp;");
});
myEvent.on("hello",function(){
    console.log("hi wsp;");
});


myEvent.on("HI",function(){
    console.log("hi ;");
})
myEvent.emit("hello");


// myEvent.removeAllListeners();
// myEvent.removeAllListeners("HI");


myEvent.emit("HI");
