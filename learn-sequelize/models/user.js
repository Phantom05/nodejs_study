module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('user', {
    name:{
      type: DataTypes.STRING(20), // STRING은 VARCHAR
      allowNull:false, // not null과 동일함.
      unique:true,// unique옵션임.
    },
    age:{
      type:DataTypes.INTEGER.UNSIGNED, //unsigned가 적용된 int zerofill을 사용하고 싶으면 .ZEROFILL을 입력해주면 됨.
      allowNull:false,
    },
    married:{
      type:DataTypes.BOOLEAN, // TINYINT는 BOOLEAN임
      allowNull:false,
    },
    comment:{
      type: DataTypes.TEXT,//
      allowNull:true,
    },
    created_at:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()'), // defaultValue는 기본값임. NOW는 현재 시간을 가져옴
    },
  }, {
    timestamps:false,
  });
}

/**
 * insert into nodejs.users (name,age,married, comment) values ('zero','24,0,'자기소개1');
 * 은
 * const {User} = require('../models);
 * User.create({
 *  name:"zero",
 * age:24,
 * married:false,
 * comment:"자기소개1"
 * });
 * 와 같음
 * 
 * 
 * select * from nodejs.users은
 * User.findAll({}) // 여러개를 가져올떈 findAll, 한개를 가져올떈 find
 * 
 * select * from nodejs.users limit 1;
 * User.find({});
 * 
 * select name, married, from nodejs.users;
 * User.findAll({
 *  attributes:['name','married'],
 * })
 * attributes 속성을 이용해 원하는 컬럼만 가져올 수 있음.
 * 
 * 
 * select name, age from nodejs.users where married =1 and age >30;
 * 은
 * const { User,Sequelize : {Op}} = require('../models'); // 시퀄라이즈의 Op객체를 Op로 선언한다는 것임
 * User.findAll({
 *  attributes:['name','age'],
 * where:{
 *  married:1,
 *  age:{ [Op.gt]:30 },
 * }
 * })
 * 웨어문이 조건을 나열하는 방식임. age부분이 특이한데. Sequlize의 Op부분을 가져와서 사용와서 사용함.
 * 자주쓰이는 연산자로는 Op.gt(초과) Op.gte(이상) Op.lt(미만) Op.lte(이하) Op.ne(같지 않음) Op.or(또는) Op.in(배열 요소중 하나) Op.(notIn) 배열 요소와 모두 다름. []로 감사서 사용함.
 * 
 * select id, name from users where married = 0 OR age >30
 * const { User, Sequlize: {Op}} = require('../models');
 * User.findAll({
 *  attributes:[id,name],
 *  [Op.or]: [{married:0},{age:[Op.gt]:30}]
 * })
 * 
 * 1개를 선택할떄 find를 사용하기도하지만 이런식으로도 할 수 있음.
 * select id, name from users ORDER BY age DESC limit 1;
 * User.findAll({
 *  attributes:['id','name'],
 * order:['age','DESC'],
 * limit:1,
 * offset:1,
 * })
 * 
 * 로우를 수정하는 쿼리
 * update nodejs.users Set comment = '바꿀내용' where id =2;
 * User.update({
 *  comment:'바꿀 내용',
 * },{
 *  where:{id:2},
 * })
 * 
 * 로우를 삭제하는 쿼리
 * delete from nodejs.users where id = 2;
 */
