// To have a module execute code multiple times, export a function, and call that function.

module.exports = function sayHello() {
	console.log('Hi World, this is me, Ilir!');
}

// multiple calls to require('foo') will not cause the module code to be executed multiple
// Modules are cached after the first time they are loaded. This means (among other things) that every call to require('foo') will get exactly the same object returned, if it would resolve to the same file.

console.log(require.cache);