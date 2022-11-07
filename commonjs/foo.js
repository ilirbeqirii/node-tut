const circle = require('./circle.js'); // with extension
const Square = require('./square'); // without extension, no diff, use which one you want

// imported class can be named differently from the one that is exported
// const SquareClass = require('./square.js');
// const mySquare = new SquareClass(2);


console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);

// console.log(require);
// console.log(require.main); ... (1)
// console.log(module); ... (2) is the same as (1) when loaded directly from NodeJs
