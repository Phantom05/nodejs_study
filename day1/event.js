const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1',()=>{
  console.log('이벤트 1');
});

myEvent.on('event2',()=>{
  console.log('이벤트 2');
});
myEvent.on('event2',()=>{
  console.log('이벤트 2 추가');
});

myEvent.emit('event1'); // emit이 실행
myEvent.emit('event2');

//once는 한번만 실행
myEvent.once('event3',()=>{
  console.log('이벤트 3');
});
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4',()=>{
  console.log('이벤트 4');
});

myEvent.removeAllListeners('event4');//모든 이벤트 4 삭제
myEvent.emit('event4');

const listner = ()=>{
  console.log('이벤트 5');
};
myEvent.on('event5',listner);
myEvent.removeListener('event5',listner); //이벤트5 삭제
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));
