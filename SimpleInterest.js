// Problem statement:
// - Write a function that calculates and prints the simple interest on a loan amount.
// - Input:
//     - Principal amount
//     - Interest rate (yearly)
//     - Time duration (how many years)
// - Return: Interest amount
// - Simple Interest:
//     - (Principal * Interest Rate * Time Duration) / 100
// - Example:
//     - 1000, 5%, 1 year = (1000 * 5 * 1) / 100 = 50
//     - 20000, 10%, 5 = (20000 * 10 * 5) / 100 = 10000

function calculateSimpleInterest(Principal, Rate, Time) {
  // ensure all inputs are numbers and not decimals
  if (
    typeof Principal !== "number" ||
    typeof Rate !== "number" ||
    typeof Time !== "number"
  ) {
    throw new Error("All inputs must be numbers");
  }
  if (
    !Number.isInteger(Principal) ||
    !Number.isInteger(Rate) ||
    !Number.isInteger(Time)
  ) {
    throw new Error("Principal, Rate, and Time must be whole numbers");
  }

  let result = (Principal * Rate * Time) / 100;
  return parseFloat(result.toFixed(2));
}

console.log(calculateSimpleInterest(1000, 5, 1));
console.log(calculateSimpleInterest(20000, 10, 5));
console.log(calculateSimpleInterest(20000, 8, 5));
console.log(calculateSimpleInterest(20000, 8.755, 5)); // breaks
