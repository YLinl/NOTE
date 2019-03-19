let rejected;
rejected = Promise.reject(new Error("Explosion!"));
    process.on('rejectionHandled', function ( promise) {
        console.log(rejected === promise);
    });

setTimeout(function(){
    rejected.catch(function(value){
        console.log(value.message)
    })
},1000)