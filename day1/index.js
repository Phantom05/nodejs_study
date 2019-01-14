console.clear();
const {odd,even} = require('./day1-1');
// const checkNumber = require('./day1.js');

function checkStringOddOrEven(str){
  if(str.length %2){ // 홀수면
    return odd;
  }
  return even;
}

console.log(__filename);// 현재파일경로와 이름
console.log(__dirname)//현재파일 경로

// console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));


const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;

setImmediate(()=>{
  console.log('immediate');
});
process.nextTick(()=>{
  console.log('nextTick')
});
setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(()=> console.log('promise'))

