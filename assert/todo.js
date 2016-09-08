// 模块化 开发todo类

function TODO(){
    this.todo=[];
}
TODO.prototype={

    add:function(item){
        this.todo.push(item);
    },
    deleteALL:function(){
        this.todo=[];
    },
    getCounts:function(){
        return this.todo.length;
    },
    getItemById:function(index){
        if(index>=0&&index<this.todo.length){
            return this.todo[index];
        }
        return null;
    }
};
// 导出该类
module.exports=TODO;