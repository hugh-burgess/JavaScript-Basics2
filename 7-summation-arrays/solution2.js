myArr = [3, 5, 76, 7, 8, 5, 4, 3, 2, 545];

function calculateSummation(arrayOfNumbers) {
  let sum = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum = sum + arrayOfNumbers[i];
  }
  return sum;
}

console.log(myArr);
console.log(calculateSummation(myArr));
