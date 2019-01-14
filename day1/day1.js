function day1() {
  console.log('hello world!');

  function first() {
    second();
    console.log('첫 번째');
  };

  function second() {
    third();
    console.log('두 번째');
  };

  function third() {
    console.log('세 번째');
  };
  first();

  function run() {
    console.log('3초 후 실행');
  }
  console.log('시작');
  // setTimeout(run, 3000);
  console.log('끝')


  // first실행하고 그안에서 second실행 third실행 하고 뒤로촥 촥 촥

  function longRunningTask() {
    // 오래 걸리는 작업
    console.log('작업 끝');
  }

  console.log('시작');
  setTimeout(longRunningTask,0)// 논블로킹을 만들기 위한 기법중 하나. 동기적으로 처리하지않고 바로 처리해버림.
  console.log('다음 작업');


  if(true){
    var x = 3;
  }
  console.log(x);
  console.clear();

  /**
   * 제로초의 es6
   */
  var es = 'ES'

  function sayNode(){
    console.log('NODE')
  }

  const newObject = {
    sayJs(){
      console.log('JS');
    },
    sayNode, //es6 즉 es2015에서는 그냥 함수명을 갖다 쓸수 있음.
    [es+6]:'Fantastic',//마찬가지로 변수에 대입된 값을 가져와서 쓸 수 있음.
  }

  newObject.sayNode();
  console.log(newObject.ES6);

  var relationship1 = {
    name:'zero',
    friends:['nero','hero','xero'],
    logFriends:function(){
      var that = this; // relationship1 을 가리키는 this fmf that에 저장
      this.friends.forEach(function(friends){
        console.log(that.name, friends);
      })
    }
  };
  relationship1.logFriends();

  const relationship2 = {
    name:'zero',
    friends:['zero','hero','nero'],
    logFriends(){
      this.friends.forEach(friends =>{
        console.log(this.name,friends); // 화살표 함수 안에선 중첩 this가 계쏙 본잉ㄴ 객체를 타겟
      })
    },
    test(){
      let t = x =>{
        console.log(this.name,'1');
        let a = x =>{
          console.log(this.name,'2');
          let g = x=>{
            console.log(this.name,'3'); // 상위 스코프의 this를 물려받아서 계속 본인 객체를 타겠함.
          }
          g()
        }
        a()
      }
      t()
    }
  };

  let testObj ={
    name:'phantom05'
  }
  relationship2.logFriends();
  relationship2.test();
  relationship2.test.call(testObj);
  //콜로 다른 오브젝트에 붙이면 역시나 하위 this들도 붙힌 오브젝트에 붙음


  /**
   * 비구조화 할당
   */

  // 객체
   var candyMachine1 ={
     status:{
       name:'node',
       count:5,
     },
     getCandy:function(){
       this.status.count--;
       return this.status.count;
     }
   }

  //  var getCandy = candyMachine.getCandy;
  //  var count = candyMachine.status.count;

   const candyMachine2 = {
    status:{
      name:"node",
      count:5,
    },
    getCandy(){
      this.status.count--;
      return this.status.count;
    }
   };

   const {getCandy, status:{count}} = candyMachine2;

  // 배열
  // var array =['nodejs',{},10,true];
  // var node = array[0];
  // var obj = array[1];
  // var bool = array[array.length -1 ];


  const array =['nodejs',{},10,true];
  const [node,obj,,bool] = array;

  console.log(node);
  
  const condition = true; // true면 resolve, false 면 reject
  const promise = new Promise((resolve,reject)=>{
    if(condition){
      resolve('성공');
    }else{
      reject('실패');
    }
  });

  promise
  .then((message)=>{
    console.log(message); // 성공(resolve)한 경우 실행
  })
  .catch((error)=>{
    console.error(error)
  })
  

  // var xhr = new XMLHttpRequest();
  // var formData = new FormData();
  // formData.append('name','zerocho');
  // formData.append('item','orange');
  // formData.append('item','melon');
  // formData.append('birth',1994);
  // xhr.onreadystatechange = function(){
  //   if(xhr.readyState == xhr.DONE){
  //     if(xhr.status== 200 || xhr.status == 201){
  //       console.log(xhr.responseText);
  //     }else{
  //       console.error(xhr.responseText)
  //     }
  //   }
  // };
  //주소에 한글이 들어갈때 encodeURIComponent('힌글단어)를 주소에다가 붙혀주면 됨
  // xhr.open('POST','https://www.zerocho.com/api/post/formdata');
  // //xhr.open('POST','https://www.zerocho.com/api/post/formdata'+encodeURIComponent('한글'));
  // //이런식으로
  // //또한 받는쪽에선 decodeURIComponent('%EB%RGR%Sg%ehER%EH%')이런식으로 받아서 다시 바꿔주면 됨.
  // xhr.send(formData);
  
  console.log(document.querySelector('li').dataset)
}                                                                                                                                                                                                
day1();

// const {odd,even} = require('./var');

// function checkOddOrEven(num){
//   if(num%2){ // 홀수면
//     return odd;
//   }
//   return even;
// }

// module.exports = checkOddOrEven;
