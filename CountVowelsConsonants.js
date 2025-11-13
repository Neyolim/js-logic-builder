// Problem statement:
// - Write a function that counts and prints the number of vowels and consonants in a given string
// - Input : String
// - Return : Vowel and Consonant count
// - Vowel : a e i o u
// - Consonant : All other character
// - Example:
//     - "Hello World" => 3 vowels & 7 consonants
//     - "Ashish Saluja" => 5 vowels & 7 consonants

function calculateVowelAndConsonant(string) {
  let vowels = "aeiou";
  let consonants = "bcdfghjklmnpqrstvwxyz";
  let vowels_total = 0;
  let consonants_total = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (vowels.includes(char)) {
      vowels_total += 1;
    } else if (consonants.includes(char)) {
      consonants_total += 1;
    }
  }
  return { vowels: vowels_total, consonants: consonants_total };
}

console.log(calculateVowelAndConsonant("Ashish Saluja"));
console.log(calculateVowelAndConsonant("Hello World"));
