// Problem statement:
// - Write a function that finds all the factors of a given number.
// - Input: number, positive integer
// - Return: Factors of a number
// - Factor: Is a number that divides the given number evenly or exactly, leaving no remainder
// - Example:
<<<<<<< HEAD
//     - 4: 1,2,4
//     - 14: 1,2,7,14
//     - 35: 1,5,7,35

function factorsOfNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Input must be a valid number!");
  }
  if (num < 1 || !Number.isInteger(num)) {
    throw new Error("Input number should be a positive integer!");
  }
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(factorsOfNumber(4));
console.log(factorsOfNumber(14));
console.log(factorsOfNumber(35));

