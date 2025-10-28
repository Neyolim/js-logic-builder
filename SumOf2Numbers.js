/** Problem statement:
 - Write a function that takes two numbers as input and prints their sum
 - Input: Two numbers a & b
 - Sum = a + b
 - Print the sum on the console
**/

function sum(num1, num2) {
  const sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}

// Testing is crucial for development and sharpens our analytical skills.
// We must test different scenarios to find breaking points before users do.
// A good developer actively tries to break their own code. Where are the weak spots?
// What edge cases haven't I considered? What could fail under stress?

sum(4, 5);
sum(400, 5);
sum(-4, -5);
sum(1, 0);
sum(4, 5.7);
sum(4.3, 5.7);
