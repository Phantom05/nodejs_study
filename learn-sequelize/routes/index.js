var express = require('express');
var router = express.Router();
var User = require('../models').User;

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findAll() // 모든사용자를 찾은 후 
  .then((users)=>{
    res.render('sequelize',{users});//시퀄라이즈로 랜더링할 결과값은 users를 넣어줌
    // 시퀄라이즈는 성공값인 then과 실패값은 catch를 제공함
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

//async/await은 다음과 같음

// router.get('/',async (req,res,next)=>{
//   try{
//     const users = await User.findAll();
//     res.render('sequelize', {users});
//   }catch(errpr){
//     console.error(error);
//     next(error);
//   }
// })

module.exports = router;
