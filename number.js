// Ways to create number
let num1 = 345;
let num2 = new Number(345);
let num3 = new Number(345);

console.log(typeof(num1)); 
console.log(typeof(num2)); 
// Comparison
console.log(num1 == num2);
console.log(num2 == num3);

// Properties on number
let num = 231.68;
console.log(num.toFixed(3));
console.log(num.toPrecision(3));
console.log(num.toExponential(2));
console.log(num.toString());

// Math
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);


// Advantage of math
console.log(Math.random()) ;//0-1
console.log(Math.random()*10); //0-9
console.log(Math.floor(Math.random()*10)+1);//1-10

// floor fun
console.log(Math.floor(Math.random()*10)) ;
// ceiling fun
console.log(Math.ceil(Math.random()*10));


// max = 50 min= 40
// console.log(Math.floor(Math.random()*(max-min+1)+min));
console.log(Math.floor(Math.random()*(50-40+1)+40));

// 
