//new的过程以及实现
/* new先是创建一个新的空对象，将这个对象的_proto_指向这个函数的prototype对象;
将this指向这个对象，开始执行构造函数；
执行之后判断返回的结果，如果返回的是引用类型的，就返回这个引用的对象，否则就返回这个对象。 */

// new的实现
function myNew(fn, ...rest) {
    let newobj = Object.create(fn.prototype);
    let result = fn.apply(newobj, rest);
    return typeof (result) === 'object' ? result : newobj;
}

function Parent(name,age){
    this.name = name;
    this.age = age;
}

Parent.prototype.getname = function(){
    console.log('我是一个方法')
    return this.name
}

let child = myNew(Parent,'huang',20)
console.log(child.name)
console.log(child.age)
console.log(child.getname())

let child1 = myNew(Parent,'wu',18)
console.log(child1.name)
console.log(child1.age)
console.log(child1.getname())