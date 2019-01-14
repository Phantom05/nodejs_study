var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(function(req,res,next){
//   console.log(req.url,'저도 미들웨어 입니다');
//   next()
//   /**
//    * next('router') => 다음 라우터로
//    * next(error) => 에러 핸들러로
//    */
// });
app.use(logger('dev'));
app.use('/static',express.static(path.join(__dirname, 'public')));
//정적 파일들이 담겨있는 폴더를 지정하면됨.
//이제 public/stylesheets 이런식으로 접근하면됨
//이 정적파일은 최대한 위쪽으로 두는게 좋다고함. 제로초는 morgan바로 아래다가 둔다고함. 그래야 불필요한 라우터 호출을 막을 수 있다고 함.

//app.use('/img',express.static(path.join(__dirname, 'public')));
/**
 * 이런식으로 했을떄 
 */
app.use(express.json()); // 이걸 사용하면. body-parser가 실행되는데 데이터를 전송할때 req.body에 값이 들어가게 되는것임 json형식으로. 구버전에서는 app.use(body-parser.json())이렇게 썼었어야 했음.
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('phantom05'));//쿠키파서안에값은 서명된 쿠키므로 클라이언트에서 수정했을때 에러가 발생함. 클라이언트에서 쿠리로 위험한 행동을 하는것을 방지할 수 있음.
//쿠키파서는 name=zerocho 쿠키를 보냈다면 req.cookie는 {name:zerocho가 됨}

app.use(session({
  resave:false, // 세션 수정사항이 생기지 않더라도 세션을 다시 설정할지에 대한 설정, 보통 방문자를 추적할 때 사용됨
  saveUninitialized:false,
  secret:'phantom05',//쿠키파서의 비밀키 같은 역할. 쿠키파서의 시크릿키와 동일하게 해야함
  cookie:{
    httpOnly:true,//클라이언트에서 쿠키를 확인하지 못하게하는 기능.
    secure:false,
  }
}));
//store에 데이터베이스를 연결하여 세션을 유지하는 것이 좋습니다.
//req.session.destroy(); 하면 세션이 파괴됨.
//쿠키 파서 뒤에 놓는것이 안전함
// app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
