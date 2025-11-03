// Problem statement:
// - Write a function that calculates and prints the sum of the digits of a given number
// - Input : A number, positive integer -> 12, 34, 123, 1234
// - Return: sum of digits
// - Example:
//     12: 1 + 2 = 3
//     23: 2 + 3 = 5
//     456: 4 + 5 + 6 = 15

function calculateSumOfDigits(inputNumber) {
  let number = inputNumber;
  let SumOfDigits = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    SumOfDigits += lastDigit;
  }
  return SumOfDigits;
}

console.log(calculateSumOfDigits(12));
console.log(calculateSumOfDigits(23));
console.log(calculateSumOfDigits(456));
console.log(calculateSumOfDigits(4569));

// Method - 2

// function calculateSumOfDigits(inputNumber) {
//   if (inputNumber < 1) {
//     throw new Error("Input Number must be a positive number !!");
//   }
//   const inputNumberAsString = inputNumber.toString();
//   const splittedInputString = inputNumberAsString.split("");
//   // console.log(splittedInputString)
//   let sumOfDigits = 0;
//   splittedInputString.forEach((digit) => {
//     sumOfDigits = sumOfDigits + parseInt(digit);
//   });
//   return sumOfDigits;
// }

// console.log(calculateSumOfDigits(12));
// console.log(calculateSumOfDigits(23));
// console.log(calculateSumOfDigits(456));

// function sumOfDigits(num) {
//   if (typeof num !== "number" || num < 0 ) return "Invalid input";
//   digit = num.toString();
//   splitDigits = digit.split("");
// //   console.log(splitDigits);
//   sum = 0;
//   for (let i = 0; i < splitDigits.length; i++) {
//     sum += Number(splitDigits[i]);
//   }
//   return sum;
// }

// console.log(sumOfDigits(12));
// console.log(sumOfDigits(23));
// console.log(sumOfDigits(456));
// console.log(sumOfDigits(-456)); // breaks
// console.log(sumOfDigits("one two three")); // breaks
