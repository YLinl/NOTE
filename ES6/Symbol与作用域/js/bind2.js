var foo = {
  value: 1
};

Function.prototype.bind2=function(contex,){
var _self = this;
var arg1 = Array.prototype.slice.call(arguments).slice(1);
console.log(arg1)
return function(){
  console.log(this)
  var arg2;
  arguments.length > 0 ? arg2 = Array.prototype.slice.call(arguments): arg2=[];
  _self.call(contex,[...arg1,...arg2]);
 }
}

function bar (a){
  this.age = 29;
  console.log("a:   "+a)
  console.log(this.value)
}
bar.prototype.age=function(){
  console.log(this.age)
}
var bindFoo2 = bar.bind2(foo,'lin','bo');
 
var obj2 = new bindFoo2('ma')
 console.log(obj2.age());
 
 