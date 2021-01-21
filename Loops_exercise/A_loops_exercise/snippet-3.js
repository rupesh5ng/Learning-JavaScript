// Make a prediction for what it will print. Run it.


let foo = function () {
  for (let num = 10; num > 0; num -= 2) {
    console.log(num);
  }
};

console.log("begin");
foo();
console.log("end");
foo();
//begin
//10 
//8
//6
//4
//2
//end
//10 
//8
//6
//4
//2
