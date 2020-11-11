// 实现apply
Function.prototype.myApply = (obj, arr) => {
    obj = obj ? Object(obj) : window
    obj.fn = this;
    let result = arr ? obj.fn(...arr) : obj.fn;
    delete obj.fn;
    return result;
}

// 实现call
Function.prototype.myCall = (obj) => {
    obj = obj ? Object(obj) : window
    obj.fn = this;
    let arr = [...arguments].slice(1)
    let result = arr ? obj.fn(...arr) : obj.fn;
    delete obj.fn;
    return result;
}

// 实现bind
Function.prototype.myBind = (obj) => {
    if (!typeof (this) === 'function') {
        throw new Error('不是被函数调用的')
    }
    obj.fn = this;
    let args = [].slice.call(arguments, 1);
    let bound = function () {
        let params = [].slice.call(arguments)
        obj.fn.apply(obj, args.concat(params))
    }
    bound.prototype = obj.fn.prototype
    return bound
}

Function.prototype.bind_ = function (obj) {
    if (typeof(this) !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    };
    var args = Array.prototype.slice.call(arguments, 1);
    /* var fn = this; */
    //创建中介函数
    var fn_ = function () {};
    var bound = function () {
        var params = Array.prototype.slice.call(arguments);
        //通过constructor判断调用方式，为true this指向实例，否则为obj
        fn.apply(this.constructor === fn ? this : obj, args.concat(params));
        console.log(this);
    };
    fn_.prototype = fn.prototype;
    bound.prototype = new fn_();
    return bound;
};

var z = 0;
var obj = {
    z: 1
};

function fn(x, y) {
    this.name = 'huangxiaomin';
    console.log(this.z);
    console.log(x);
    console.log(y);
};
fn.prototype.age = 26;

var bound = fn.bind_(obj, 2);
var person = new bound(3); //undefined 2 3

console.log(person.name); //听风是风
console.log(person.age); //26
person.__proto__.age = 18;
var person = new fn();
console.log(person.age); //26