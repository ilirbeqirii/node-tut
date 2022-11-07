const helloFn = require('./cache');
const helloMediatorFn = require('./cache-v3');

console.log('Form cache v2: ');
helloFn();
helloMediatorFn();
console.log('');