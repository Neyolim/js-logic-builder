// Problem statement:
// - Write a function that returns the reverse of a string
// - Input : A string
// - Return : reversed string
// - Example = "Neyong" -> "gnoyeN"

// Method - 1

function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError("Only String is allowed !!!");
  }
  reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

console.log(reverseString("Ram"));
console.log(reverseString("Neyong"));
console.log(reverseString("Software Development"));
console.log(reverseString(23424)); // breaks

// // Method - 2

// function reverseString2(string) {
//     let result = string.split('').reverse().join('');
//     console.log(result)
// }

// reverseString2("Ram")
// reverseString2("Neyong")
// reverseString2("Software Development")

Logic is important, but thorough testing across diverse scenarios is what ensures your code remains robust and reliable.
