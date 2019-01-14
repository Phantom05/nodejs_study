const http = require('http');


//쿠기는 name=zerocho;year=1994 이런식으로 오기 때문에 제이슨 형식으로 하싱해주는 함수이다.
const parseCookies = (cookie='')=>
  cookie
    .split(';')
    .map(v=>v.split('='))
    .map(([k, ...vs])=>[k, vs.join('=')])
    .reduce((acc, [k,v])=>{
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    },{});


    http.createServer((req,res)=>{
      const cookies = parseCookies(req.headers.cookie);
      console.log(req.url, cookies);
      res.writeHead(200, {'Set-Cookie':'mycookie=test'});
      res.end('Hello world');
    })
    .listen(9999,()=>{
      console.log('9999 go')
    })
