// Problem statement:
// - Write a function that tells if provided year is a leap year or not
// - Input: A Number, positive integer -> 1900, 2023, 2033
// - Return: true if leap year, false if not leap year
// - Leap Year:
//     - Every 4th year is leap year
//     - Leap year has 366 days
//     - Normal year has 365 days
//     - February has 28 days or 29 days
//     - Ignoring the exception of 1700, 1800 and 1900 which is not a leap year
// - Example:
//      - 2000 - leap year - true
//      - 2023 - not a leap year - false
//      - 2024 - leap year -true

function isLeapYear(year) {
  if (typeof year !== "number" || year < 0) {
    console.log("Enter a valid year");
    return;
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(1700));  // false
console.log(isLeapYear(2000));  // true
console.log(isLeapYear(2024));  // true
console.log(isLeapYear(2023));  // false


Your focus should be on writing optimized, concise, and readable code.
