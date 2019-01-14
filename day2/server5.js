const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie='')=>
  cookie
    .split(';')
    .map(v=>v.split('='))
    .map(([k, ...vs])=>[k, vs.join('=')])
    .reduce((acc, [k,v])=>{
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    },{});

const session = {};


http.createServer((req,res)=>{
      const cookies = parseCookies(req.headers.cookie);
      if(req.url.startsWith('/login')){
        const {query} = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        
        expires.setMinutes(expires.getMinutes() + 5);
        const randemInt = +new Date();
        session[randemInt] ={
          name,expires,
        };
        res.writeHead(302, {
          Location:'/',
          "Set-Cookie":`name=${encodeURIComponent(name)}
          Expires=${expires.toUTCString()}; HttpOnly; Path=/`,
        });
        res.end();
      }else if(cookies.session && session[cookies.session].expires > new Date()){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요`);
      }else{
        fs.readFile('./server4.html',(err,data)=>{
          if(err){
            throw err;
          }
          res.end(data);
        })
      }
    })
    .listen(9999,()=>{
      console.log('9999 go')
    })
