const http = require('http');
http.createServer((req,res)=>{
  res.write('<h1>Hello world!</h1>');
  res.end('<p>Hello Server!</p>');

}).listen(9995,function(){
  console.log('9995 gp')
})
