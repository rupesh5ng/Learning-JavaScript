// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.
let twoSumPairs = function(arr,target){
  let finalarr =[];
  for (i=0; i < arr.length; i++){
    for(j=i+1 ; j< arr.length; j++){
      if (arr[i]+ arr[j] === target){
        finalarr.push([arr[i],arr[j]])
      }
    }
  }
  return finalarr
}

console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
console.log(twoSumPairs([3, 9, 8], 10)); // [ ]