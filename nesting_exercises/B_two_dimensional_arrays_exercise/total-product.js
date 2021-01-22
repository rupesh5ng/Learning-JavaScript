// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

let totalProduct = function (array) {
  let product =1;
  for (let i = 0; i < array.length; i++) {
    let subArr = array[i];
    for(let j = 0; j < subArr.length ; j++) {
      product *= subArr[j];
    }
  }
  return product;
};
let array1 = [
  [3, 5, 2],
  [6, 2],
];
console.log(totalProduct(array1)); // 360

let array2 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
console.log(totalProduct(array2)); // 288