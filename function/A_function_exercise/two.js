// Make a prediction for what it will print.
// Run it.


let average = function (num1, num2) {
  console.log("calculating...");   // anything before return is also going to get print
  return (num1 + num2) / 2;        // means this function will print 1> calculating... 2. avg result
};

console.log(average(5, 10)); // calculating... 7.5
console.log(average(20, 26)); // calculating... 23
console.log(average(50, 100) + 2); // calculating... 77

let a = 21 + 3;
let b = 20;
let n = average(a, b); // calculating... 
console.log(average(n, 18)); // calculating... 20