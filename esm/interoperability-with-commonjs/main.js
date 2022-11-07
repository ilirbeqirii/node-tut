// import statements are permitted only in ES modules, but dynamic import() expressions are supported in CommonJS for loading ES modules.

const divison = require('./division'); // The CommonJS module require always treats the files it references as CommonJS.
// Using require to load an ES module is not supported because ES modules have asynchronous execution. Instead, use import() to load an ES module from a CommonJS module.
console.log(divison(5, 3)); // 2

import('./addition.mjs')
	.then(m => console.log(m.add(4, 4)));

