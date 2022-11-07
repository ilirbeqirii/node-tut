// this is Common JS module for bar.mjs es module

// * Due to the synchronous nature of require(), it is not possible to use it to load ECMAScript module files. Attempting to do so will throw a ERR_REQUIRE_ESM error. Use import() instead.
// *The .mjs extension is reserved for ECMAScript Modules which cannot be loaded via require() * 

// ! this wont work
// const MAX_CONSTANT = require('./bar.mjs'); // for es modules, extension should be specified

// ! this wont work too cause this file is not (considered) es module - To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// import { MAX_LEVEL } from './bar.mjs';

// ? this works
import('./bar.mjs')
	.then(m => console.log(m.MAX_LEVEL));

// import() => is the synonym of -> import {} from 'xxx'