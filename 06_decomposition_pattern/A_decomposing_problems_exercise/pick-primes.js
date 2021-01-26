// Write a function `pickPrimes` that accepts an array of numbers as an argument. The function should
// return an array containing only the prime numbers. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.
let isPrime = function(num){
  if (num < 2) return false ;
  for(i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let pickPrimes = function(array){
  let newArr =[];
  array.forEach(function(num, i) {
    if (isPrime(num)) newArr.push(num);
  })
  return newArr;
}
console.log(pickPrimes([12, 3, 7, 18, 11])); // [3, 7, 11]
console.log(pickPrimes([17, 23, 9, 42])); // [17, 23]
console.log(pickPrimes([4, 2048, 100, 55])); // []