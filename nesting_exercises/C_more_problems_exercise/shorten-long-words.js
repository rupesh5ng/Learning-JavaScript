// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.
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

let shortenLongWords = function(sent) {
  words = sent.split(" ");
  newWords =[];
  words.forEach ( function(word, i) {
    if(word.length > 4){
      newWords.push(removeVowels(word));
    }else{
      newWords.push(word);
    }
  }

  )
  return newWords.join(" ");
};

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'