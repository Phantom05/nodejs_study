const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex',crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64',crypto.createHash('sha512').update('다른 비밀번호'));
console.log('hex',crypto.createHash('sha1').update('비밀번호').digest('hex'));




crypto.randomBytes(64,(err, buf)=>{
  const salt = buf.toString('base64');
  console.log('salt:',salt);
  crypto.pbkdf2('비밀번호',salt,100000,64,'sha512',(err, key)=>{
    // console.log('password',key.toString('base64'));
  });
});

console.clear();
const cipher = crypto.createCipher('aes-256-cbc','열쇠');
let result = cipher.update('암호화할 문장','utf8','base64');
result += cipher.final('base64');
console.log('암호화:',result)
