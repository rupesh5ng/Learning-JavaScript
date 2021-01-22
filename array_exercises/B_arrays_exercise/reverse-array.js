// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.
let reverseArray = function(arr){
  let newArr =[];
  for(i = arr.length - 1 ; i >= 0 ; i--){
    newArr.push(arr[i]);
  }
  return newArr
}

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]