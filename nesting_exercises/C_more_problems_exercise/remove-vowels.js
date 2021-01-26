// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.
let removeVowels = function(string) {
  let vowels = "aeiou";
  let newStr ="";
  let arr = string.split("");

  arr.forEach(function (el,i) {
    if (!vowels.includes(el)){
      newStr += el;
    }
  });
  return newStr ;
};
console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr