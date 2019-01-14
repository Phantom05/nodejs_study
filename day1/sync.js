const fs = require('fs');
console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번',data.toString());

data = fs.readFileSync('./readme2.txt');
console.log('2번',data.toString());

//이렇게하면 무조건 동기식으로 동작함.
