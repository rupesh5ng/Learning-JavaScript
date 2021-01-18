// snippet 2-1
let nonsense = "blog trust fund tattooed williamsburg poke roof party";
let hasOk = nonsense.indexOf("ok") > -1; // true

if (hasOk) {
  console.log("yeet"); // yeet
} else if (nonsense.length > 10) {
  console.log("yo");
} else {
  console.log("no");
}

let hasZoo = nonsense.indexOf("zoo") > -1; // false
let hasFun = nonsense.indexOf("fun") > -1; // true

if (hasZoo && hasOk) {    //false && true
  console.log("cool");
} else if (hasOk) {         // true
  console.log("rad");       // rad
} else if (hasFun) {
  console.log("dope");
} else {
  console.log("nope");
}
// yeet
// rad

//-----------------------------------
// snippet 2-2

let q = 25;
if (q % 3 === 0 && q % 5 === 0) {         // false && true => false
  console.log("both");
} else if (q % 3 === 0 || q % 5 == 0) {   // false or true => true
  console.log("either");     // either
} else {
  console.log("neither");
}

let r = 9;
if (r % 3 === 0 && r % 5 === 0) {  // true && false => false
  console.log("both");
} else if (r % 3 === 0 || r % 5 == 0) { // true or false => true
  console.log("either");   // either
} else {
  console.log("neither");
}

let s = 15;
if (s % 3 === 0 && s % 5 === 0) {  // true && true => true
  console.log("both");   // both
} else if (s % 3 === 0 || s % 5 == 0) {
  console.log("either");
} else {
  console.log("neither");
}



// either 
// either 
// both