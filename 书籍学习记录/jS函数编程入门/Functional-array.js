let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let arr3 = arr1.concat(arr2);

// console.log(arr3); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


let arr4 = [
  {
    name:'lin',
    age: 29
  },
  {
    like: 'sleep',
    data: 20190322
  }
]
let arr5 = [
  {
    what:'?!',
    why: '?'
  },
  {
    how: 'can',
    do: 'ok'
  }
]
arr4.concat(arr5);
// console.log(arr4, arr4.length)//[ { name: 'lin', age: 29 },{ like: 'sleep', data: 20190322 },{ what: '?!', why: '?' },{ how: 'can', do: 'ok' } ]4

// console.log([].concat(arr4).concat(arr5))








let arr7 =[ [{
    name: 'lin',
    age: 29
  },
  {
    like: 'sleep',
    data: 20190322
  }
]
, [{
    what: '?!',
    why: '?'
  },
  {
    how: 'can',
    do: 'ok'
  }
]]
 function concatAll(obj) {
   var result  = [];
   var result1 = [];
  
   for (let msg of obj) {
    //  console.log(msg)
      result1 = result1.concat(msg);
      result.push.apply(result,msg);
      
   }
   console.log(result);
   console.log(result1);
   return result;
 }
concatAll(arr7)

console.log(process.mainModule)