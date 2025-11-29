// Problem statement:
// - Write a function that tells if the given number is prime or not.
// - Input: A number
// - Return: true if prime and false if not prime
// - Prime number: A number that can be only be divided by itself and 1 without remainders
// - Example: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
// - Example of 5:
//     - 1 - 5/1 -> 0
//     - 2 - 5/2 -> 1
//     - 3 - 5/3 -> 2
//     - 4 - 5/4 -> 1
//     - 5 - 5/5 -> 0

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrimeNumber(5));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(137));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(9));

// Method - 1 [Less Optimized Code] - more checks means CPU overhead

// function isPrimeNumber(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//       break;
//     }
//   }
//   return true;
// }

// console.log(isPrimeNumber(5)); // true
// console.log(isPrimeNumber(2)); // true
// console.log(isPrimeNumber(4)); // false

/**
 * TIME COMPLEXITY: O(sqrt(N))
 * * In Data Structures and Algorithms (DSA), Time Complexity measures how the
 * running time (number of operations) of an algorithm grows as the input size (N,
 * which is 'num' in this case) increases.
 * * 1. Original Loop: O(N) (Linear)
 * - Checking every number from 2 up to N required N-2 operations.
 * * 2. Optimized Loop: O(sqrt(N)) (Square Root)
 * - By checking only up to Math.sqrt(num), we drastically reduce the
 * number of operations. If a factor exists, we only need to find its
 * smaller partner (less than or equal to sqrt(N)).
 * - This makes the function thousands of times faster for very large numbers.
 */
