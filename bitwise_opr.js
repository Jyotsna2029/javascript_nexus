
console.log(5 & 4); // 4 

console.log(5 | 4); // 5
console.log(5 ^ 4); // 1
console.log(~5); // -6
console.log(5 << 4); // 80
console.log(5 >> 4); // 0
console.log(5 >>> 4); // 0



// Bitwise operators in JavaScript perform operations on the binary representations of numbers. Here's a breakdown of
//  each operator used in your code:

// AND (&):

// Compares each bit of two numbers and returns a new number whose bits are set to 1 only if both corresponding bits
//  of the operands are 1.
// Example: 5 & 4
// Binary: 0101 & 0100
// Result: 0100 (which is 4 in decimal)
// OR (|):

// Compares each bit of two numbers and returns a new number whose bits are set to 1 if at least one of the corresponding
//  bits of the operands is 1.
// Example: 5 | 4
// Binary: 0101 | 0100
// Result: 0101 (which is 5 in decimal)
// XOR (^):

// Compares each bit of two numbers and returns a new number whose bits are set to 1 if only one of the corresponding
//  bits of the operands is 1.
// Example: 5 ^ 4
// Binary: 0101 ^ 0100
// Result: 0001 (which is 1 in decimal)
// NOT (~):

// Inverts all the bits of the number (also known as bitwise complement).
// Example: ~5
// Binary: ~0101
// Result: 1010 (which is -6 in decimal, considering two's complement representation)
// Left Shift (<<):

// Shifts the bits of the first operand to the left by the number of positions specified by the second operand.
//  Bits shifted off to the left are discarded, and zeros are shifted in from the right.
// Example: 5 << 4
// Binary: 0101 << 4
// Result: 01010000 (which is 80 in decimal)
// Right Shift (>>):

// Shifts the bits of the first operand to the right by the number of positions specified by the second operand. 
// Bits shifted off to the right are discarded, and the sign bit is used to fill in from the left.
// Example: 5 >> 4
// Binary: 0101 >> 4
// Result: 0000 (which is 0 in decimal)
// Unsigned Right Shift (>>>):

// Shifts the bits of the first operand to the right by the number of positions specified by the second operand. 
// Bits shifted off to the right are discarded, and zeros are shifted in from the left. The sign bit is not preserved.
// Example: 5 >>> 4
// Binary: 0101 >>> 4
// Result: 0000 (which is 0 in decimal)