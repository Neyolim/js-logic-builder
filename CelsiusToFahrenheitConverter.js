// Problem statement:
// - Write a function that converts a temperature in Celsius to Fahrenheit.
// - Input: Temperature in Celsius
// - Return: Temperature in Fahrenheit
//     - Celsius & Fahrenheit are 2 different scales two measure temperature
//     - Formula (Temperature in degrees Celsius(C) * 9/5) + 32
//     - Example:
//         - 27 degrees = (27 * 9/5) + 32 = 80.6 Fahrenheit
//         - 34 degrees = (34 * 9/5) + 32 = 93.2 Fahrenheit

function tempConversion(temp) {
  if (typeof temp !== "number") {
    throw new Error("Input should be number !!1");
  }
  let result = (temp * 9) / 5 + 32;
  result = Math.round(result);
  return result;
}

console.log(tempConversion(27));
console.log(tempConversion(34));
console.log(tempConversion(-34));
