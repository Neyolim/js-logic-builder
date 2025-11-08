// Problem statement:
// - Write a function that checks if a string is palindrome or not
// - Input: A string
// - Return: boolean, true if Palindrome and false if not palindrome
// - A palindrome is a word that reads the same backward or forward
// - Example:
//     - madam
//     - level
//     - dad

function isPalindrome(inputString) {
  let start = 0;
  let end = inputString.length - 1;
  for (start; start < end; start++, end--) {
    if (inputString[start] !== inputString[end]) return false;
  }
  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Luffy"));

// Method -2

// function isPalindrome(inputString) {
//   for (i = 0; i < inputString.length / 2; i++) {
//     if (inputString[i] !== inputString[inputString.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("red"));

// Method - 3

// function isPalindrome(string) {
//   let splittedString = string.split("");
//   reverse = "";
//   for (let i = 0; i < string.length; i++) {
//     reverse += splittedString[string.length - 1 - i];
//   }
//   if (string.toLowerCase() === reverse.toLowerCase()) return true;
//   return false
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("Romeo"));

// Method - 4

// function isPalindrome(string) {
//     if(typeof string !== "string") {
//         throw new TypeError("Only String is allowed !!!");
//     }
//   given = string.split("").reverse().join("");
//   if (given === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("student"));
// console.log(isPalindrome(2323)); // breaks
