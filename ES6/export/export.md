# export

在创建JavaScript模块时，export语句用于从模块中导出函数、对象或原始值。以便其他程序可以通过import语句使用它们。

#### 2中导出方式

*命名导出：

```javascript ()
 export { myFunction };//导出前面申明的函数
 export const foo = Math.sqrt(2); //导出一个常数
```

*默认导出：

```javascript ()
 export  default function(){};//默认导出函数
 export default class{}; //默认导出类
```

命名导出对导出多个值很有用。在导入时，必须使用相应对象的相同名称  
默认导出，在导入时可以使用任意名称。