/**
 * @file 单例模式
 * @author tuanfe
 * @date 2014/5/19
 */


/**
 * 实现方式一：定义一个字面量的形式创建一个对象，就可以认为是一个单体
 */

var singleton = {
    name: 'tuanfe',
    age: 25,
    height: 175
}

/**
 * 实现方式二：构造函数的方式
 *
 */

function Singleton(){
    //正常的属性
    this.name= 'tuanfe';
    this.age= 25;

    if(typeof Singleton.instance === "object"){
        return Singleton.instance;
    }
   
    //缓存this
    Singleton.instance = this;

    return this;
}

var s1 = new Singleton();
var s2 = new Singleton();
console.log(s1 === s2);    //true

/**
 * 实现方式三: 立即执行函数方式
 *
 */

var Singleton;
(function(){
    var instance;
    Singleton = function Singleton(){
        if(instance){
            return instance;
        }

        instance = this;
        //正常的属性
        this.name= 'tuanfe';
        this.age= 25;
    }
})();

var s1 = new Singleton();
var s2 = new Singleton();
console.log(s1 === s2);    //true

/**
 * 实现方式四：闭包
 *
 */

var Singleton = (function(){
    //实例引用
    var instance;
    function init(){
        //对象初始化操作
    }

    return {
        //暴露出公共API，提供全局唯一访问点
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})();

var s1 = Singleton.getInstance();  
var s2 = Singleton.getInstance();  
console.log(s1 ===s2);    //true

