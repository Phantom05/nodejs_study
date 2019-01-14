const os = require('os');
console.log('운영체제 정보--------------------');
console.log('os.arch():',os.arch());
console.log('os.platform()',os.platform());
console.log('os.type()',os.type());
console.log('os.uptime()',os.uptime());
console.log('os.hostname()',os.hostname());
console.log('os.release():',os.release());

console.log('경로----------------------------');
console.log('os.cpus()',os.cpus());
console.log('')
console.log('')

const path = require('path');
const string = __filename;


console.log(path.sep);
const url = require('url');
const URL = url.URL;
const myURL = new URL('http://www.gitbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log(myURL)

const parseURL = url.parse('http://www.gitbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse',parseURL);

