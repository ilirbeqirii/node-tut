const { PI } = Math;

// PI - Variables local to the module will be private

// Functions and objects are added to the root of a module by specifying additional properties on the special exports object.
exports.area = (r) => PI * r * 2;
exports.circumference = (r) => 2 * PI * r;

console.log(module);
console.log(require.main);
console.log(require.main == module); // false - becuse not run directly but with require function