# Promise

## Promise: 是 ES6 中新增的异步编程解决方案，体现在代码中他是一个对象，可以通过 Promise 构造函数来实例化</h2>

- new Promise(cb) ===>实例的基本使用 Pending Resolve Rejected

> 两个原型方法：

- Promise.prototype.then()
- Promise.prototype.catch()

> 两个常用的静态方法：

- Promise.all()
- Promise.resolve()
  
// new Promise(cb)
//Pending (进行中) ===> Resolved (已完成)  
//Pending (进行中) ===> Rejected (已失败)