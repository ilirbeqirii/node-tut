console.log('a starting');
exports.done = false;

const b = require('./b');

console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');