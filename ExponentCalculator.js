// Problem statement:
// - Write a function that returns the result of raising a given number to a specified power.
// - Input: Two numbers
//     - Base
//     - Exponent
// - Return: Base to the power of exponent
// - Example:
//     - 2,3 : 2 * 2 * 2 = 8
//     - 5,4 : 5 * 5 * 5 * 5 = 125

function calculatePower(base, expo) {
  // Validation
  if (base < 0 || expo < 0) {
    throw new RangeError("Inputs should be greater than 0 !!");
  }
  result = 1;
  for (let i = 0; i < 3; i++) {
    result *= base;
  }
  return result;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(5, 4));
console.log(calculatePower(-5, 4)); // breaks
console.log(calculatePower(-5, "one")); // breaks
