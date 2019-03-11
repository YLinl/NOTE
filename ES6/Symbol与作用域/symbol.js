// let s = Symbol();
// console.log(typeof s);


// var s1 = Symbol('foo');
// var s2 = Symbol('bar');

// s1.toString() // "Symbol(foo)"
// s2.toString() // "Symbol(bar)"
// console.log(s1.toString())
// console.log(s2.toString())


// var mySymbol = Symbol();
// var a = {
// };

// a.mySymbol = 'Hello!';
// console.log(a[mySymbol]); // undefined
// console.log(a['mySymbol']); // "Hello!
 
// var obj = {};
// var a = Symbol('a');
// var b = Symbol('b');

// obj[a] = 'Hello';
// obj[b] = 'World';

// var objectSymbols = Object.getOwnPropertySymbols(obj);

// console.log(objectSymbols)
// // [Symbol(a), Symbol(b)]

//Reflect.ownKeys:
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};
console.log(Reflect.ownKeys(obj)) //[ 'enum', 'nonEnum', Symbol(my_key) ]
 
console.log(obj[Symbol('my_key')]) //undefined
// console.log(obj.Symbol('my_key')) //undefined  //obj.Symbol is not a function


let my_key = Symbol('my_key')
let obj2 = {
  [my_key]: 1,
  enum: 2,
  nonEnum: 3
};
console.log(Reflect.ownKeys(obj2)) //[ 'enum', 'nonEnum', Symbol(my_key) ]

console.log(obj2[my_key]) //1
