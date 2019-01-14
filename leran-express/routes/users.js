var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   next('/abc'); // 주소와 일치하는 다음 라우터로 넘어감.
//   res.send('respond with a resource');
// }, function(){
//   console.log('실행되지 않습니다.');
//   next()
// }, function(){
//   console.log('실행되지 않습니다.');
//   next()
// }, function(){
//   console.log('실행되지 않습니다.');
//   next()
// });

router.get('/',function(req, res, next){
  console.log('실행행됩니다.')
  res.render('test',{title:'Express'});
});


//라우터 주소에는 특수한 패턴을 사용 할 수 있음.
router.get('/user/:id',(res,req)=>{
  console.log(req.params,req.query);
});

/**
 * res.send(버퍼 또는 문자열 또는 HTML 또는 JSON)
 * res.sendFile(파일 경로)
 * res.json(JSON 데이터)
 * res.redirect(라우터 또는 주소)
 * res.render('템플릿 파일 경로,{변수})
 * res.status(404).send('Not Found)
 */


// router.get('/flash',function(req,res){
//   req.session.message ='세션 메세지';
//   req.flash('message','flash 메세지');
//   //flash는 한번만 클라이언트한태 보내지고 새로고침하면 사라짐.
//   res.redirect('/users/flash/result');
// });

// router.get('/flash/result',function(req,res){
//   res.send(`${req.session.message} ${req.flash('message')}`);
// });


module.exports = router;
