// arithmetic operators
// add operator
console.log(4+4);
// subtract operator
console.log(4-4);
// multiply operator
console.log(4*4);
// divide operator
console.log(4/4); 
// modulus operator
console.log(4%4);
// exponentiation operator
console.log(4**4);
// ++ postincrement operator, -- postdecrement operator, ++ preincrement operator, -- predecrement operator
let sum = 4;
sum++;
console.log(sum);
sum--;
console.log(sum);
++sum;
console.log(sum);
--sum;
console.log(sum);



// divide and multiply (left to right) have higher precedence than add and subtract (left to right)
console.log(((6*(3+18))/6)-9);

// assignment operators
let x = 5;
x += 5; // x = x + 5    
console.log(x);
x -= 5; // x = x - 5
console.log(x);
x *= 5; // x = x * 5
console.log(x);
x /= 5; // x = x / 5
console.log(x);
x %= 5; // x = x % 5

// comparison operators
let a = 5;
let b = 5;
console.log(a == b); // equal to
console.log(a === b); // equal value and equal type
console.log(a != b); // not equal
console.log(a !== b); // not equal value or not equal type
console.log(a > b); // greater than
console.log(a < b); // less than
console.log(a >= b); // greater than or equal to
console.log(a <= b); // less than or equal to
