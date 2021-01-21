// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25


// let oddSum = function(num){
//   sum = 0
//   for (let i = 0; i <= num; i++){
//     if (i % 2 === 0){
//       continue;
//     }else{
//       sum += i
//     }
//   }
//   return sum
// };
let oddSum = function(num){
  let i =0;
  sum =0;
  while(i <= num ) {
    if (i % 2 === 1){

      sum += i;
    }
    i++;
  }
  return sum;
};
console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9