// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later 
// in the sentence.
let lengthiestWord = function(sent){
  let words = sent.split(" ");
  let longest = words[0];
  for (let i = 1; i < words.length; i++){
    if (longest.length <= words[i].length){
      longest =words[i];
    }
  }
  return longest;
}
console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'