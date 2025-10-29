// Problem statement:
// - Write a function that tells if a given number is even or odd
// - Input: A number
// - Return: "even" if the numbers is even, "odd" if the number is odd
// - Even: Number when divided by 2 has zero remainder [-2, 0, 2, 4, 12, 144]
// - Odd: Number when divided by 2 has non zero(1, -1) remainder [-1, 1, 3, 5, 131, 157]

// Most optimized code(Method 1)
function checkIfEvenOrOdd(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

console.log(checkIfEvenOrOdd(0));
console.log(checkIfEvenOrOdd(2));
console.log(checkIfEvenOrOdd(3));
console.log(checkIfEvenOrOdd(-1));
console.log(checkIfEvenOrOdd(1));

// Method2

function checkEvenOrOdd(number) {
  switch (number % 2) {
    case 0:
      console.log(`${number} is an even number.`);
      break;
    case 1:  //fall-through
    case -1:
      console.log(`${number} is an odd number.`);
      break;
    default:
      // Handles cases where the input  is not  a valid number
      console.log(`${number} is not a valid integer.`);
      break;
  }
}

// Test the function with different numbers
checkEvenOrOdd(10); 
checkEvenOrOdd(7); 
checkEvenOrOdd(-5);
checkEvenOrOdd(0);  
checkEvenOrOdd(3.5);


// function checkIfEvenOrOdd(num) {
//     const remainder = num % 2
//     if(remainder == 0) {
//         return "Even"
//     }
//     else {
//         return "Odd"
//     }
// }

// console.log(checkIfEvenOrOdd(0))
// console.log(checkIfEvenOrOdd(2))
// console.log(checkIfEvenOrOdd(3))
// console.log(checkIfEvenOrOdd(-1))
// console.log(checkIfEvenOrOdd(1))



// function checkIfEvenOrOdd(num) {
//   if (num % 2 == 0) {
//     console.log("Even:", num);
//   } else {
//     console.log("Odd:", num);
//   }
// }

// checkIfEvenOrOdd(5);
// checkIfEvenOrOdd(2);
// checkIfEvenOrOdd(-1);
// checkIfEvenOrOdd(0);
