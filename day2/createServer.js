const http = require('http');
const server = http.createServer((req,res)=>{
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});


server.listen(9995,()=>{
  console.log('9995번 포트에서 서버 대기중 입니다.');
})


server.on('error',(error)=>{
  console.error(error)
});
