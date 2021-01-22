// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.

let makeAcronym = function(sent){
  let words = sent.split(" ");
  let acronym = ""
  for (i = 0; i < words.length; i++){
    acronym += words[i][0].toUpperCase();
  }
  return acronym
};
console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS