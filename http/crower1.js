var http=require("http");
var cheerio=require("cheerio");
var url="http://www.imooc.com/learn/348";


function filterChapters(html){

    var $=cheerio.load(html);
    var chapters= $(".chapter ");

    // [{

    //     chapterTitle:"",
    //     videos:{
    //         title:"",
    //         id:""
    //     }
    // }]

    var info=[];
    chapters.each(function(item){
         var chapterTitle=$(item).find("strong").text();
         var videos=$(item).find(".video").children("li");
         console.log("************");
         console.log(typeof videos);
         console.log( videos);
         console.log("************") ;
         var chapterData={
            chapterTitle:chapterTitle,
            video:[]
         }
         videos.each(function(item1){
            console.log(item1);
            var video=$(this).find(".J-media-item");

            // console.log(video);
            var videoTitle=video.text();
            var videoId=video.attr("href").split("video/")[1];
            chapterData.video.push({
                title:videoTitle,
                id:videoId
            });
         });
         info.push(chapterData);
    });
    
    return info;

}

function printChapter(chapters){
    chapters.forEach(function(item){
        console.log("章标题："+item.chapterTitle);
        var videos=item.videos;
        videos.forEach(function(item1){
            console.log("video 标题："+item1.title);
            console.log("video id:"+item1.videoId);
        })
    })
}

http.get(url,function(res){
    var html="";

    res.on("data",function(data){
        html+=data;
    }); 
    res.on("end",function(){
        // console.log(html);
        var chapters=filterChapters(html);
        pirntChater(chpters);
    });
    res.on("error",function(){
        console.log("error");
    });
    // res.on("timeout",function(){
    //     console.log("timeout");
    // })
})