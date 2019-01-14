process.on('uncaughtException',(err)=>{
  console.error('예기치 못한 에러',err);
});

setInterval(()=>{
  throw new Error('서버를 고장내주바!!');
},1000)

setTimeout(()=>{
  console.log('실행 됩니다.')
},2000)
