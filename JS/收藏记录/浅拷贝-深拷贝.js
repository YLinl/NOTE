
// <!-- const originArray = [1,2,3,4,5];
// const cloneArray = originArray.slice()
// slice,concat,assign 只是对数组的第一层进行深拷贝。 -->




 //深拷贝 一、 JSON
 
   var  obj = JSON.parse(JSON.stringify(book));//function ，undefied不能被拷贝

//深拷贝 二、 递归

  function copy(obj){
      vv = Array.isArray(obj) ? [] : {};
    for (var v in obj){
        if(typeof obj[v] == 'object'){
          vv[v] = copy(obj[v])
        }else{
          vv[v] = obj[v]
        }
    }
    return vv;
  }


  var book = {
    name: "Lin",
    like: {
      sleep: '睡觉',
      distracted: '走神',
      study: '学习',
      fun: function () {

      }
    }
  }
function clone(obj){
var  vv= null;
if(typeof obj =='object' && obj !==null){
  vv = Array.isArray(obj) ? []:{};
  for(var v in obj){
    vv[v] = clone(obj[v])
  }
}else{
  vv = obj
}
return vv;
}

var o= clone(book);
console.log(o)