// Problem statement:
// - Write a function that calculates and returns the average of a set of numbers.
// - Input: Array of positive integer numbers
// - Returns: Average of numbers
// - Average: Calculated by dividing the total of all the values by the number of values.
// - Example:
//     - [1,2,4]: (1+2+4)/3 = 2.33333..
//     - [1,2,7,14]: (1+2+7+14)/4 = 6
//     - [1,5,7,35]: (1+5+7+35)/4  = 12

function findAverageOfNumbers(numbers) {
  // Check if input is an array
  if (!Array.isArray(numbers)) {
    throw new Error("Only arrays are allowed as input.");
  }

  // Check if all elements are positive integers
  for (let num of numbers) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num <= 0) {
      throw new Error("All elements of the array should be positive integers.");
    }
  }

  let numbers_sum_total = 0;
  let total_numbers = numbers.length;

  for (let i = 0; i < total_numbers; i++) {
    numbers_sum_total += numbers[i];
  }

  let average = numbers_sum_total / total_numbers;
  return average;
}

console.log(findAverageOfNumbers([1, 2, 4]));        // Output: 2.333...
console.log(findAverageOfNumbers([1, 2, 7, 14]));    // Output: 6
console.log(findAverageOfNumbers([1, 5, 7, 35]));    // Output: 12
