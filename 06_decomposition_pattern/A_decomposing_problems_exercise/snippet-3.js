// Make a prediction for what it will print. Run
// it.


let foo = function () {
  for (let i = 0; i < 5; i++) {
    console.log("i = " + i);
    bar();
  }
};

let bar = function () {
  for (let j = 0; j < 5; j++) {
    console.log("  j = " + j);
  }
};

foo();

// i = 0
//   j = 0
//   j = 1
//   j = 2
//   j = 3
//   j = 4 
// it get repeated same for each i upto i <  5
