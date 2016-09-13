var url=require("url");

var url1="https://cloud.baidu.com/doc/BAE/QuickGuide.html";

var url2=url.parse(url1);

console.log(url2);


var fullurl="http://wsp:wangshi@github.com:8080/a/b/t/h?query=string#hash";

var parseFullUrl=url.parse(fullurl);

console.log(parseFullUrl);

var urlObject={
    protocol:"http",
    auth:"wsp/wangshi",
    hostname:"wangshiping.net",
    port:8080,
    pathname:"wsp/test",
    serach:"query=aaa&id=1",
    hash:"#lala"

};

var parseurl=url.format(urlObject);

console.log(parseurl);
// 给定一个 基础url 路径，向浏览器一样处理 href 路径 
// 
// url.resolve()

console.log(url.resolve("/one/two/three","four"));
console.log(url.resolve("/one/two/three","/four"));
console.log(url.resolve("/one/two/three","four.html"));
console.log(url.resolve("http://example.com","/wsp"));
console.log(url.resolve("http://example.com/wsp","/one/two"));
console.log(url.resolve("http://example.com/wsp","/one/two.html"));
console.log(url.resolve("http://example.com/wsp","one/two.html"));

