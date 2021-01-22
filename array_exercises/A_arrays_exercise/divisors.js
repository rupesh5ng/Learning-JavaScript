// Write a function `divisors` that accepts a number as an argument. The function should return an
// array containing all positive numbers that can divide into the argument.
let divisors = function(num) {
  let arr = [];
  for (i = 1 ; i <= num; i++) {
    if (num % i === 0){
      arr.push(i);
    }
  }
  return arr
};

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]