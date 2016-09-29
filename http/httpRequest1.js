
var http=require("http");

var queryString=require("querystring");

var content ={
    content:"good job i love it ",
    cid:"121"
}
var postData=queryString.stringify(content);

var formData=queryString.stringify({
    thread_id:6324817083070677761,
    parent_id:"",
    nonce:"5788fdbbb192e",
    message:"TEST333",
    v:"16.6.16"
});



// console.log(postData);

var options={
    "hostname":"www.imooc.com",
    "method":"POST",
    "pathname":"/course/docomment",
    "port":"80",
     headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=f930f747-1f68-4179-b01b-d358b9aba5c8; imooc_isnew_ct=1470753516; PHPSESSID=0nuo0d3opjsu5cehjh877q03l2; jwplayer.mute=false; jwplayer.volume=100; loginstate=1; apsid=Y3MzRhZGNhODZiNmE3N2MzOTkyZGYwMjBhYTIwNzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjI1NzkxOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3c3A5NzFAcXEuY29tAAAAAAAAAAAAAAAAAAAAAAAAADBjNTViYzg0NGU0YzYxMWQ1YTIyZjdlY2NlZThkMWQ0vk3iV75N4lc%3DZG; last_login_username=wsp971%40qq.com; imooc_isnew=2; cvde=57d7f39a02c79-150; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1473336747,1473770390; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1474526790',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/121',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2763.0 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
     }
}




var option1={
    "hostname":"wangshiping.duoshuo.com",
    "method":"POST",
    "pathname":"/api/posts/create.json",
    "port":"80",
    headers:{

        'Accept':'*/*',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':formData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'duoshuo_unique=7bd6190934245e53; posts[6324817083070677761_6333092134148637442]=deleted',
        'Host':'wangshiping.duoshuo.com',
        'Origin':'http://wangshiping.net',
        'Referer':'http://wangshiping.net/2016/08/18/setInterval/',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2763.0 Safari/537.36'

    }

}





// Accept:*/*
// Accept-Encoding:gzip, deflate
// Accept-Language:zh-CN,zh;q=0.8
// Connection:keep-alive
// Content-Length:87
// Content-Type:application/x-www-form-urlencoded; charset=UTF-8
// Cookie:duoshuo_unique=7bd6190934245e53; posts[6324817083070677761_6333092134148637442]=deleted
// Host:wangshiping.duoshuo.com
// Origin:http://wangshiping.net
// Referer:http://wangshiping.net/2016/08/18/setInterval/
// User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2763.0 Safari/537.36







var req=http.request(option1,function(res){
    console.log("status"+res.statusCode);
    console.log("headers:"+ JSON.stringify(res.headers));
    var rtnmsg="";
    res.on("data",function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
        // rtnmsg+=chunk.toString("utf8");
    });
    res.on("end",function(){
        console.log("评论完毕");
        console.log(rtnmsg);
    });

});

req.on("error",function(e){
    console.log("请求失败"+e.message);
});

req.write(formData);
req.end();