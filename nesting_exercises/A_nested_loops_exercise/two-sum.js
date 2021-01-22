// Write a function `twoSum(numbers, target)` that accepts an array of numbers and a target number
// as an argument. The function should return a boolean indicating whether or not there exists a pair
// of distinct elements in the array that sum to the target.
let twoSum = function(arr,target){
  for (i=0; i < arr.length; i++){
    for(j=i+1 ; j< arr.length; j++){
      if (arr[i]+ arr[j] === target){
        return true
      }
    }
  }
  return false
}
console.log(twoSum([2, 3, 5, 9], 7)); // true
console.log(twoSum([2, 3, 5, 9], 4)); // false
console.log(twoSum([6, 3, 4], 10)); // true
console.log(twoSum([6, 5, 1], 10)); // false