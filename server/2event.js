// B1: Import module EventEmitter
const EventEmitter = require('events');

// B2: Tạo instance
const myEmitter = new EventEmitter();

// B3: Lắng nghe sự kiện "sayHello"
myEmitter.on('sayHello', (name) => {
  console.log(`👋 Xin chào ${name}!`);
});

// B4: Lắng nghe sự kiện "sayBye"
myEmitter.on('sayBye', (name) => {
  console.log(`👋 Tạm biệt ${name}!`);
});

// B5: Phát sự kiện
myEmitter.emit('sayHello', 'Việt Hùng');
myEmitter.emit('sayBye', 'Việt Hùng');
