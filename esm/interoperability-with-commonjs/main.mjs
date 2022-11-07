// An import statement can reference an ES module or a CommonJS module.
import { add } from './addition.mjs';

// When importing CommonJS modules, the module.exports object is provided as the default export. Named exports may be available, provided by static analysis as a convenience for better ecosystem compatibility.
import division from './division.js';

console.log(add(2, 3)); // 5
console.log(division(4, 1)); // 3
