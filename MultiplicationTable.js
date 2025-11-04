// Problem statement:
// - Write a function that generates and prints a multiplication table for a given number up to a specified range
// - Input: 2 Positive Numbers
//     - Table of
//     - Table till
// - Return: Nothing
// - Example:
//     - 4, 10 => 4,8,12....40
//     - 8, 20 => 8, 16, 24....160

function multiplicationTable2(tableOf, tableTill) {
  console.log(`Multiplication table of ${tableOf}`);
  for (i = tableOf; i <= tableOf * tableTill; i += tableOf) {
    console.log(i);
  }
}

multiplicationTable2(4, 10);
multiplicationTable2(8, 20);

// function multiplicationTable(of, till) {
//   if (till < 0) return;
//   console.log(`The multiplication table of ${of}`);
//   for (let i = 1; i <= till; i++) {
//     product = of * i;
//     console.log(`${of} * ${i} = ${product}`);
//   }
// }

// multiplicationTable(4, 10);
// multiplicationTable(8, 20);
// multiplicationTable(-2, -10); // breaks
