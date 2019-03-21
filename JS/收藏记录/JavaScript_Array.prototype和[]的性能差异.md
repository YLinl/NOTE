#

## 转载自： [紫云飞博客园](http://www.cnblogs.com/ziyunfei/archive/2012/09/22/2698505.html)
]JavaScript:Array.prototype和[]的性能差异  

(总的来说：访问缓存原型的变量变量最快，不过性能差距非常小)

访问缓存原型的变量>直接访问原型>访问快捷方式[]  

 # 详情

 [译]JavaScript:Array.prototype和[]的性能差异  
原文:http://www.2ality.com/2011/08/array-prototype-performance.html

Array.prototype包含了许多的通用方法,这些通用方法可以使用在任意的类数组对象上.[]是一个常用的用来访问这些方法的快捷方式.本文要讲的就是使用这个快捷方式的优点和缺点.

## 说明
**类数组(array-like)对象.** JavaScript中有一些对象叫类数组对象,他们有索引访问,有length属性,和数组很像,却没有数组的方法.常见的类数组对象有:特殊值arguments(能够通过索引访问到传入一个函数调用中的所有参数)和大部分的DOM查询结果.在ECMAScript 5中,不能使用标准的数组方法是多么的不幸,比如很有用的Array.prototype.forEach方法.

**通用方法(Generic methods).** 有一些方法是通用的.这些方法不光可以被属于他们原型的实例调用,还可以被其他类型的对象实例借来调用.想要借用一个通用方法,可以在这个通用方法上调用下面的这两个方法:

Function.prototype.call(thisValue, [arg1], [arg2], ...)
Function.prototype.apply(thisValue, [arrayWithArguments])
借用方法的对象实例要放在第一个参数的位置,作为这个通用方法调用时的this值.通用方法都对借用该方法的对象实例有一定的要求.比如,大部分通用的数组方法只允许那些拥有索引访问和length属性的对象实例借用自己. Array.prototype.slice是个通用方法,它可以把一个类数组对象的全部或部分成员转换成数组.

例子: 在一个类数组对象arguments上调用通用方法Array.prototype.map().

```javascript
function prefixHello(prefix) {
    return Array.prototype.map.call(arguments, function(elem) {
        return "Hello "+elem;
    });
}
执行:

> prefixHello("Jane", "John")
[ 'Hello Jane', 'Hello John' ]
```

**[] 作为快捷方式.** [].foo经常作为Array.prototype.foo的快捷方式.也就是说,你可以通过一个对象实例访问到了原型上的方法.

优点: 更简洁.
缺点: 并不能真正说明自己的意图.因为你并不是真的在调用一个实例方法,而是在借用原型上的一个函数.
缺点: 稍微慢点.

## 访问通用方法的几种方式,哪种最快?

我想看看到底性能有多大的差别,于是做了一个不是很科学的测试.测试代码:

```javascript
var iterations = 100000000;
var data = []; // 空数组,更快
(function () {
    var start = (new Date).getTime();
    
    // 循环

    var diff = (new Date).getTime() - start;
    console.log(diff);    
}());
直接访问原型上的方法:

for(var i=0; i<iterations; i++) {
    Array.prototype.slice.call(data);
}
访问实例[]上的方法:

for(var i=0; i<iterations; i++) {
    [].slice.call(data);
}
把原型缓存在一个局部变量里:

var arrayProto = Array.prototype;
for(var i=0; i<iterations; i++) {
    arrayProto.slice.call(data);
}
```

结果(iMac, 2.7 GHz Intel Core i5):

|测试环境|循环次数|直接访问原型|访问快捷方式[]|访问缓存原型的变量|
| ---- | ---- | ---- |---- | ---- |
|Node.js 0.4.8|100,000,000|5019ms|5075ms|4692ms|
|Firefox 6|10,000,000|1592ms|2237ms|1522ms|
|Rhino 1.7 release 3|10,000,000|2318ms|2687ms|1878ms|
 

## 结论
从结论可以看出,几种方法在执行时间上并没有太大的差别.因此,除非你写的代码非常重视性能,否则,你应该使用你认为可读性最好的方式(对应的就是写起来最简洁的方式).

译者注:最常用的通用方法Array.prototype.slice,只有jQuery用的是[].slice的形式,prototype,mootools,yui,dojo使用的都是Array.prototype.slice.