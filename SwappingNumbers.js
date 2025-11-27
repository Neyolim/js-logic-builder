// Problem Statement:
// - Write a program that swap two numbers
// - Input: Two numbers a & b
// - Output: Interchange the values of a & b
// - Example:
//     - Input: a = 5, b = 6
//     - Output: a = 6, b = 5

/* Method- 1 */

let a = 5;
let b = 6;
let c = a + b; // c = 11
a = c - a;     // a = 11 - 5 = 6
b = c - b;     // b = 11 - 6 = 5
console.log(a, b); // Output: 6, 5



/* Method - 2 */

let a = 5;
let b = 6;
let c = b;  // c = 6
b = a;      // b = 5
a = c;      // a = 6
console.log(a, b); // Output: 6, 5

