// The exports variable is available within a module's file-level scope, and is assigned the value of module.exports before the module is evaluated.
// be aware that like any variable, if a new value is assigned to exports, it is no longer bound to module.exports:

exports = { hello: false }; // Not exported, only available in the module

//  Exported from require of module
module.exports.hello = true; 
module.exports.hi = false;



// When the module.exports property is being completely replaced by a new object, it is common to also reassign exports:
// module.exports = exports = 5;