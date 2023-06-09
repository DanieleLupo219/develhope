// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

function sum(...Args) {
  let total = 0;
  for (let number of Args) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
