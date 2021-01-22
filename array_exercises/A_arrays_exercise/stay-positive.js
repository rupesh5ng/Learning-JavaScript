// Write a function `stayPositive` that accepts an array of numbers as an argument. The function should
// return an array containing only the positive numbers.
let stayPositive = function(arr){
  let newArr =[];
  for(i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []