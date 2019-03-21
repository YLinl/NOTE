 function add(num) {
   var arr = [].slice.apply(arguments);
   var len = arr.length;
   var sum = 0;

   for (let i = 0; i < len; i++) {
     sum += arr[i];
   }
 
   return sum;
 }

 function curry(fn, a, b) {
   var arg1 = [].slice.apply(arguments).slice(1);
   return function (arg) {
   
     var arg2 = [].slice.apply(arguments);
   return   fn.apply(null, [...arg1, ...arg2]);
   }
 }
 var sum = curry(add, 1, 2);
 console.log(sum(3));
