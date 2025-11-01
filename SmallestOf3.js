// Problem statement:
// - Write a function that finds and prints the smallest number among three given numbers.
// - Input : 3 numbers
// - Return: Smallest number
// - Example = 3,2,6 -> 2
// - Example = -1,-6,9 -> 2
// - Math.min is not allowed
// - Pause the video and try it yourself

// Method -1

function smallestNumberOfThree(a, b, c) {
  // Validation
  if (typeof a != "number" || typeof b != "number" || typeof c != "number")
    return "Invalid input";

  if (a <= b && a <= c) return a;
  else if (b <= c) return b;
  else return c;
}

console.log(smallestNumberOfThree(3, 1, 6));
console.log(smallestNumberOfThree(-1, -6, 9));
console.log(smallestNumberOfThree(3, 3, 1));
console.log(smallestNumberOfThree(9, 9, 9)); // breaks
console.log(smallestNumberOfThree("one", 9, 9)); // breaks

// // This one is more readable

// function smallestOfThree2() {
//   let smallestNumber = a;
//   if (b < smallestNumber) {
//     smallestNumber = b;
//   }
//   if (c < smallestNumber) {
//     smallestNumber = c;
//   }
//   return smallestNumber;
// }

// console.log(smallestNumberOfThree(3, 1, 6));
// console.log(smallestNumberOfThree(-1, -6, 9));
// console.log(smallestNumberOfThree(3, 3, 1));

// Method -2

// function smallestNumberOfThree(a, b, c) {
//   // Validation
//   if (typeof a != "number" || typeof b != "number" || typeof c != "number")
//     return "Invalid input";

//   // Put values in array, sort, and return first element
//   return [a, b, c].sort((x, y) => x - y)[0];
// }

// console.log(smallestNumberOfThree(3, 1, 6));
// console.log(smallestNumberOfThree(-1, -6, 9));
// console.log(smallestNumberOfThree(3, 3, 1));
// console.log(smallestNumberOfThree(9, 9, 9)); // breaks
// console.log(smallestNumberOfThree("one", 9, 9)); // breaks

// Method -3

// function findSmallest(numbers) {
//   let smallest = numbers[0];
//   for (const number of numbers) {
//     if (smallest > number) {
//       smallest = number;
//     }
//   }
//   return smallest;
// }

// console.log(findSmallest([-1, -6, 6]));
// console.log(findSmallest([3, 1, 6]));


As developers, we need to make our code "robust" - meaning it should be stable,  resilient, and able to handle errors or unexpected inputs gracefully without crashing.