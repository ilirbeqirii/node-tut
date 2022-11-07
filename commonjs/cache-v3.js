const helloFn = require('./cache');

console.log('Form cache v3: ');

module.exports = function sayHelloMediator() {
	helloFn();
}