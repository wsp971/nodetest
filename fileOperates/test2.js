var fs=require("fs");

var path=require("path");

var fnv=require("fnv-plus");



/*
  获取文件的hash值
 */

function getFileHash(path,callback,options){
    var hash;
    fs.readFile(path,{encoding:"utf-8"},function(err,data){
        if(err){
            console.log(err);
            return;
        }
        hash=fnv.hash(data,32);
        var toString=options&&options.type;
        switch(toString){
            case "dec":callback&&callback(hash.dec());break;
            case "hex": callback&&callback(hash.hex());break;
            case "str": callback&&callback(hash.str());break;
        }
    });
}

// 打印一段文字
function prints(message){
    console.log("文件所在文件夹绝对路径为："+__dirname);
    console.log("当前文件的绝对路径为:"+__filename);
    console.log("print start");
    console.log(message);  
    console.log("print finish");  
}

//判断文件夹是否存在，不存在创建之

function exists(path,callback){
    fs.exists(path,function(exists){
        var existsStat=exists?"目录存在":"目录不存在";
        console.log(existsStat);
        // 查看文件信息与目录的相关信息
        // console.log("查看文件信息与目录相关的信息");
        if(!exists){
            console.log("创建目录开始");
            fs.mkdir(path,function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("目录创建成功");
                    callback&&callback();
                }
            });
        }else{
            callback&&callback();
        }
    });
}


/*判断目录是否存在*/
function exists1(src,dst,callback){
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

// 复制源文件夹的内容到目的文件夹
function copyFolder(src,dst){
    exists(dst,function(){
        fs.readdir(src,function(err,files){
                if(err){
                    console.log(err);
                    return ;
                }
                // console.log(typeof files);
                files.forEach(function(file){
                    var srcPath=path.normalize(src+"/"+file);
                    var destPath=dst+"/"+file;
                    // var destPath=path.normolize(dst+"/"+file);
                    console.log("srcPath"+srcPath);
                    console.log("destPath"+destPath);
                    fs.stat(srcPath,function(err,stats){
                        if(stats.isFile()){
                            var readable = fs.createReadStream( srcPath );
                            var writable = fs.createWriteStream( destPath ); 
                            readable.pipe(writable);
                            fileTohash(destPath);
                        }
                        if(stats.isDirectory()){
                            console.log(srcPath+" is a direactory");
                            copyFolder(srcPath,destPath);
                        }
                 });

            })
        });
    })
}

// 重命名该文件为文件名+hash值
function fileTohash(file){
    file=path.normalize(file);
    fs.readFile(file,{encoding:"utf-8"},function(err,data){
        var hash=fnv.hash(data,32);
        var hashstr=hash.hex();
        var index=file.lastIndexOf("/");
        var fileName=file.slice(index+1);
        var arr=fileName.split(".");
        arr.splice(1,0,"_",hashstr,".");
        var str=arr.join("");
        fs.rename(file,str);
    });
}


fileTohash(__dirname+"/test1.js");

// 测试复制文件夹功能
// copyFolder(__dirname+"/node_modules",__dirname+"/test1");


// fs.rename('/tmp/hello', '/tmp/world', function (err) {
//   if (err) throw err;
//   console.log('renamed complete');
// });



// 测试打印
// 

// getFileHash(__dirname+"/test1.js",funct
// ion(message){
//     prints(message);
// },{type:"hex"});



// name:创建目录测试
// description: 判断目录，如果目录不存在，创建目录。
// 
// exists(__dirname+"/test/test1");

