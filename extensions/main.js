const fooName = require('./foo');
const barName = require('./bar.mjs');

// * == .json files are parsed as JSON text files, 
// * == .node files are interpreted as compiled addon modules loaded with process.dlopen(). 
// * == Files using any other extension (or no extension at all) are parsed as JavaScript text files. 

// A required module prefixed with '/' is an absolute path to the file. 
   // For example, require('/home/marco/foo.js') will load the file at /home/marco/foo.js.

// A required module prefixed with './' is relative to the file calling require(). 
	 // That is, foo.js must be in the same directory as foo.js for require('./foo') to find it.

// Without a leading '/', './', or '../' to indicate a file, the module must either be a core module or is loaded from a node_modules folder.

// If the given path does not exist, require() will throw a MODULE_NOT_FOUND error.