const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request',(req,res)=>{
  console.log(req.url);
 

  res.writeHead(200, 'have a good emtion',{
    
    'Content-Type': 'text/html'
  });
  res.write(req.toString())
  res.end(` 
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Hello</h1>
</body>
</html> `)
})
server.listen(8080,'localhost',()=>console.log('listening...'));

