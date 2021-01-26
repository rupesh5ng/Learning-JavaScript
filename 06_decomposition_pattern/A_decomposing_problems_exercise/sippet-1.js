// Make a prediction for what it will print. Run
// it.


let flim = function () {
  console.log("leak");
  flam();
  console.log("geek");
};

let flam = function () {
  console.log("beak");
  console.log("sneak");
};

flim();



// leak
// beak
// sneak
// geek