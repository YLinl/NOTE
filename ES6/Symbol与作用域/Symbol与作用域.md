# Symbol
## 概述

ES5的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是ES6引入Symbol的原因。  

Es6引入了一种新的数据类型Symbol，表示独一无二的值，它是JavaScript语言的第7中数据类型。

Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

```javascript
let s= Symbol();
typeof s; //"symbol"
```

>注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象。也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

```javascript
var s1 = Symbol('foo');
var s2 = Symbol('bar');

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

如果Symbol的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个Symbol值。

```javascript
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)
```

>注意，symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的symbol函数的返回值是不相等的。

```javascript
// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();

s1 === s2 // false

// 有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');

s1 === s2 // false
```

>Symbol值不能与其他类型的值进行运算，会报错。

```javascript
var sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
`your symbol is ${sym}`
// TypeError: can't convert symbol to stringbj);
sym // Symbol(abc)
```

>但是，Symbol值可以显示转换为字符串。

```javascript
var sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```

>另外,Symbol值也可转为布尔值，但不能转为数字。

```javascript
var sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
  // ...
}

Number(sym) // TypeError
sym + 2 // TypeError
```

## 作为属性名的Symbol
由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

```javascript
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

>注意，Symbol值作为对象属性名时，不能用点运算符。

```javascript
var mySymbol = Symbol();
var a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
```

上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际是一个字符串，而不是一个Symbol.  
同理。在对象的内部，使用Symbol值定义属性时，Symbol值必须放在括号中。

```javascript
let s = Symbol();

let obj = {
  [s]: function (arg) { ... }
};

obj[s](123);

如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的那个Symbol值。
```

采用增强的对象写法，上面代码的obj对象可以写的更简洁一些。

```javascript
let obj = {
  [s](arg) { ... }
};
```

>还有一点需要注意，Symbol值作为属性名时，该属性还是公开属性，不是私有属性。

### 实例：消除魔术字符串
魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，该由含义清晰的变量代替。  

### 属性名的遍历
Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。

```javascript
var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

var objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol(a), Symbol(b)]
```

>另一个新的API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和Symbol键名。

```javascript
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj) //  ["enum", "nonEnum", Symbol(my_key)]
console.log(obj[Symbol('my_key')]) //undefined
//如果先定义 let my_key = Symbol('my_key';
// let my_key = Symbol('my_key')
// let obj2 = {
//   [my_key]: 1,
//   enum: 2,
//   nonEnum: 3
// };
// console.log(Reflect.ownKeys(obj2)) //[ 'enum', 'nonEnum', Symbol(my_key) ]

// console.log(obj2[my_key]) //1  这里可以输出
```

### 参考链接：
  [ECMAScript 6 入门-第三版-阮一峰](http://es6.ruanyifeng.com/)