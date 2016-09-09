var fs=require("fs");

// hash处理模块

var fnv=require("fnv-plus");


var path=require("path");


function prints(message){
    console.log("文件所在文件夹绝对路径为："+__dirname);
    console.log("当前文件的绝对路径为:"+__filename);
    console.log("print start");
    console.log(message);  
    console.log("print finish");  
}

function getFileHash(path){
    var file=fs.readFile(path,{encoding:"utf-8"},function(err,data){
        if(err){
            console.log(err);
            return;
        }
        var hash=fnv.hash(data,32);
        return hash;
    });
}


var hash=getFileHash(__dirname+"db.json");
console.log(hash);

function copyFile(src,dest){

}

/*判断目录是否存在*/
function exists(src,dst,callback){
    fs.exists(dst,function(exists){
        if(exists){
            callback(src,dst);
        }else{
            fs.mkdir(dst,function(){
                callback(src,dst);
            });
        }
    });
}



/*异步读取文件*/
fs.readFile("db.json",{encoding:"utf-8"},function(err,data){
    if(err){
        console.log(err);
        console.log("读取文件失败");
    }else{
        // console.log(data);
        // var hash=fnv.hash(data,32);
        // console.log(hash.str());
        // console.log(hash.hex());
        // console.log(hash.dec());


    }
});



// 用文件流的形式来读取文件
// 
// 

var rs=fs.createReadStream("db.json",{encoding:"utf-8"});

rs.on("open",function(fd){
    console.log("开始读取文件");
});
rs.on("data",function(data){
    console.log(typeof data);
    console.log(data.length);
    console.log(data.toString());
});
rs.on("end",function(){
    console.log("文件读取结束");
});
rs.on("close",function(){
    console.log("文件关闭");
});
rs.on("error",function(err){
    console.error(err);
});

/*暂停和恢复文件读取*/
rs.pause();

setTimeout(function(){
    rs.resume();
},2000);



// 写文件
// 
// 

// var ws=fs.createWriteStream(__dirname+"/test/test1.txt",{encoding:"utf-8" start:0});

// var buffer=new Buffer("我喜欢你");

// ws.write(buffer,'utf8',function(err,buffer){
//     console.log(arguments);
//     console.log("写入完成");
// })









/*hash处理*/


var hash=fnv.hash("wsp ",32);
/*hash 转化为字符串*/
console.log(hash.str());
/*hash 转化为16进制*/
console.log(hash.hex());
/*hash转化为10进制*/
console.log(hash.dec())






/*创建目录*/

// console.log("创建目录开始");

console.log("检查目录是否存在");

fs.exists(__dirname+"/test",function(exists){
    var existsStat=exists?"目录存在":"目录不存在";
    console.log(existsStat);


    // 查看文件信息与目录的相关信息
    console.log("查看文件信息与目录相关的信息");
    fs.stat(__dirname,function(err,stats){
        console.log(stats.isFile());
        console.log(stats.isDirectory());
    })

    if(!exists){

        console.log("创建目录开始");

        fs.mkdir(__dirname+"/test",function(err){
            if(err){
                console.log(err);
            }else{
                console.log("目录创建成功");
            }
        });

    }
});


//
// 读取目录
// 

fs.readdir(__dirname+"/test",function(err,files){
    if(err){
        console.log(err);
        return;
    }
    files.forEach(function(file){
        console.log(file);
        var filePath=path.normalize(__dirname+"/test/"+file);
        console.log(filePath);
        fs.stat(filePath,function(err,stats){
            if(stats.isFile()){
                console.log(filePath+" is a file");
            }
            if(stats.isDirectory()){
                console.log(filePath+" is a directory");
            }
        });
    })
});







// console.log(fnv.hash("wspsadfasdf",64));

