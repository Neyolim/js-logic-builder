// Problem statement:
// - Write a function that finds and prints the maximum element in an array of numbers.
// - Input: Array of numbers
// - Return: Biggest numbers
// - Example:
//     - [3, 6, 1, 8, 3, 7] => 8
//     - [7, 84, 16, 38, 45, 76] => 84
// - Do not use Array Sort

function maxElement(arrayOfNumbers) {
  if (!arrayOfNumbers || arrayOfNumbers.length === 0 || isNaN(arrayOfNumbers)) {
    throw new RangeError("We need some numbers in the array!!");
  }
  max = arrayOfNumbers[0];
  length = arrayOfNumbers.length;
  for (i = 1; i < 6; i++) {
    if (max < arrayOfNumbers[i]) {
      max = arrayOfNumbers[i];
    }
  }
  return max;
}

console.log(maxElement([3, 6, 1, 8, 3, 7]));
console.log(maxElement([7, 84, 16, 38, 45, 76]));
console.log(maxElement([-1, 45, 67, 86, 888]));
console.log(maxElement([-1, 45, 67, 86, "eight"])); // breaks
console.log(maxElement([])); // breaks
console.log(maxElement(null)); // breaks

// Method - 2(In-build methods)

// function maxElement2(arrayOfNumbers) {
//   max = Math.max(...arrayOfNumbers);
//   console.log(max);
// }

// maxElement2([3, 6, 1, 8, 3, 7]);
// maxElement2([7, 84, 16, 38, 45, 76]);
