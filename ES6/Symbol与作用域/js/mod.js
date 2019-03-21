var arr = [1,2,3,4];
 if(!Array.prototype.forEach1){
   Array.prototype.forEach1 = function(callback,thisArg){
     var T, k;
     if(this == null){
       throw new TypeError(' this is null or not defined');
     }
     var O = new Object(this);
     var len = O.length>>>0;  
     if(typeof callback !== 'function'){
       throw new TypeError(callback + ' is not a function');
     }
     if(arguments.length>1){
       T = thisArg;
     }
     k=0;
     while (k<len){
       if(k in O){
         kValue = O[k];
         callback.call(T,O[k],k,O);
       }
       k++;
     }

   };

 }