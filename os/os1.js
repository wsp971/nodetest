var os=require("os");

// os.tmpdir();
// 返回操作系统默认的文件目录

console.log(os.tmpdir());





//os.endianness();
//返回cpu的字节序，可能是“be"或者”le"

console.log(os.endianness()); 


// os.hostname()
// 返回操作系统的主机名

console.log(os.hostname());

// os.type()
// 返回操作系统名称

console.log(os.type());


// os.platform()
// 返回操作系统平台


console.log(os.platform());


// os.arch()
// 返回操作系统的发行版本

console.log(os.arch());


// os.uptime()
// 返回操作系统运行的时间，以秒为单位

console.log(os.uptime());

// os.loadavg()
// 返回一个包含1,5,15分钟的平均负载数组
// 

console.log(os.loadavg());


// os.totalmem();
// 返回系统内存总量 单位为字节

console.log(os.totalmem());


// os.freemem();
// 返回操作系统的空闲内存量 单位是字节

console.log(os.freemem());

// os.cpus();
// 返回cpu的内核型号 速度等信息

console.log(os.cpus());


// os.networkInterfaces()
// 获取网络接口的一个列表信息

console.log(os.getNetworkInterfaces());


// OS.EOL
// 返回操作系统定义的一行结束标志的常量

console.log(os.EOL);