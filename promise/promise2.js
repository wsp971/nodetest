function jquery(options){
    this.options=options;
};
var $=jquery;

$.fn=$.prototype;

$.fn.ajax=$.ajax=function(options){
    var requireRes=options.requireRes;
    // console.log(options.data);
    console.log(options.requireRes);
   options.success&&options.success(requireRes);
}

var promise3=new Promise(function(resolve,reject){
    resolve({});
});
promise3.then(function(){
    var result="";
    $.ajax({
        url:"..",
        requireRes:{id:2},
        dataType:"application/json",
        success:function(res){
            console.log(res.id);
            result=res.id;
        },  
        error:function(res){

        }
    })
}).then(function(id){
    $.ajax({
        url:"...",
        data:{a:1,b:2,id:id},
        success:function(res){
            // 成功回调
            console.log(id);
        },
        error:function(res){
            // 失败回调
            console.log(res);
        }
    })
});
