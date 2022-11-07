// console.log('before adding export:', exports);
// exports.name = 'module wrapper';
// console.log('after adding export:', exports);

// console.log(require);
// console.log(module);
// console.log('filename:', __filename);
// console.log('dirname:', __dirname);

console.log(require.cache);

// Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

// (function(exports, require, module, __filename, __dirname) {
 	// Module code actually lives in here
// });

// this wrapper function is the reason why we have access on: exports, require, module, __filename, __dirname 
// when writing code on nodejs files(modules)