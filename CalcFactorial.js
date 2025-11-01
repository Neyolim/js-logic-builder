// Problem statement:
// - Write a function that calculate factorial of a given number
// - Input: A number, positive integer -> 0,1,4,7...
// - Return: Factorial of that number
// - Factorial: Multiplication of all positive integers from 1 to a given number
// - Example: 6! = 6 * 5 * 4 * 3 * 2 * 1

function calcFactorialUsingRecursion(inputNumber) {
  console.log(inputNumber); // To see how many times the func is being called

  if (inputNumber == 0 || inputNumber == 1) return 1;

  return inputNumber * calcFactorialUsingRecursion(inputNumber - 1);
  // 5 * calcFactorialUsingRecursion(4) => 5 * 24 = 120
  // 4 * calcFactorialUsingRecursion(3) => 4 * 6 = 24
  // 3 * calcFactorialUsingRecursion(2) => 3 * 2 = 6
  // 2 * calcFactorialUsingRecursion(1) => 2 * 1 = 2
}

console.log(calcFactorialUsingRecursion(5));

// Method -2 (using for loop)

// function calcFactorial(n) {
//   // Input validation
//   if (typeof n !== "number" || isNaN(n)) {
//     console.log("The input should be a number!");
//     return;
//   }
//   if (n < 0) {
//     console.log("The input should be a number greater than or equal to 0!");
//     return;
//   }

//   let factorial = 1;
//   for (let i = n; i >= 1; i--) {
//     factorial *= i;
//   }
//   console.log(`The factorial of ${n}! is ${factorial}`);
// }

// Method -3 (using while loop)

// function calcFactorial2(number) {
//   let factorial = 1;
//   let i = 1;
//   while (i <= number) {
//     factorial *= i;
//     i++;
//   }
//   return console.log(factorial);
// }

// calcFactorial2(5); // The factorial of 5! is 120
// calcFactorial2(4); // The factorial of 4! is 24
// calcFactorial2(3); // The factorial of 3! is 6
// calcFactorial2(0); // The factorial of 0! is 1
// calcFactorial2(1); // The factorial of 1! is 1

// calcFactorial2("fkadsfj"); // The input should be a number!
// calcFactorial2(-5); // The input should be a number greater than or equal to 0!


Problem-solving strategy: Decompose into subproblems, evaluate multiple approaches, and implement the optimal solution. 
