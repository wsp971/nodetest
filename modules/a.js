console.log("a start");
exports.done=false;
var b=require("./b");
console.log("in a b.done=%j",b.done);
exports.done=true;
console.log("a done");