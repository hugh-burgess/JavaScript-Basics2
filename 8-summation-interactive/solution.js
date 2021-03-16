// myArr = [3, 5, 7, 7, 8, 5, 4, 3, 2, 5];

// function calculateSummation(arrayOfNumbers) {
//   let sum = 0;

//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     sum = sum + arrayOfNumbers[i];
//   }
//   return sum;
// }

// console.log(myArr);
// console.log(calculateSummation(myArr));

let sum = 0;
let value = 0;

while (true) {
  let value = +prompt("Gimmie yer deets:", "");
  if (!value) break;
  sum += value;
}

function calculateSummation(sum) {
  let result = 0;
  for (let i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  console.log(sum);
}
calculateSummation(sum);
