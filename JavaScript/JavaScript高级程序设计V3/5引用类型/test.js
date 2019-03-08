function add(){
  var arr = Array.prototype.slice.apply(arguments),
  sum = 0;
  for(var i=0, len=arr.length;i<len;i++){
    sum+=arr[i];
  }
  return sum;
}
function curry(fn,a,b){
  var arg1 = Array.prototype.slice.apply(arguments).slice(1);
  console.log(typeof arguments);
  return function(){
    var arg2=Array.prototype.slice.apply(arguments);
    return fn.apply(null,arg1.concat(arg2));
  };
}

var fun =curry(add,1,2);
console.log(fun);
console.log(fun(4,5));
console.log(fun(5,6));