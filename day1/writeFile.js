const fs = require('fs');

fs.writeFile('./writeme.txt','오!! 산가핸!! ㅋㅋㅋ',(err)=>{
  if(err){
    throw err;
  }
  fs.readFile('./writeme.txt',(err,data)=>{ // 비동기임
    if(err){
      throw err;
    }
    console.log(data.toString())
  })
})


