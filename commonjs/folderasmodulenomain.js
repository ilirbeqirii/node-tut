const name = require('./folder-as-module-no-main');

console.log(name);

// If there is no package.json file present in the directory, or if the "main" entry is missing or cannot be resolved, then Node.js will attempt to load an index.js or index.node file out of that directory. 
// For example, if there was no package.json file in the previous example, then require('./folder-as-module-no-main') would attempt to load:

// ./folder-as-module-no-main/index.js
// ./folder-as-module-no-main/index.node
// If these attempts fail, then Node.js will report the entire module as missing with the default error:

// Error: Cannot find module 'folder-as-module-no-main'