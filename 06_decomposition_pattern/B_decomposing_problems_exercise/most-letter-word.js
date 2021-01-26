// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

let countChar = function(word,char) {
  let count = 0;
  for (let i = 0; i < word.length; i++){
    el = word[i]
    if (el === char ) {
      count += 1;
    }
  }
  return count
};

// console.log(countChar("excellence ","e")) // 4
// console.log(countChar("elephant ","e")) // 2
// console.log(countChar("apple","a")) // 1
// console.log(countChar("apple","p")) // 2

let mostLetterWord = function(sent,char) {
  let words =sent.split(" ")
  let req ="";
  words.forEach ( function(word) {
    if (countChar(req, char) < countChar(word, char)) {
      req = word;
    }
  })
  return req;
}


console.log(mostLetterWord('she received an award for excellence in science', 'e')); // 'excellence'
console.log(mostLetterWord('she received an award for excellence in science', 'a')); // 'award'
console.log(mostLetterWord('I hope sophomore year comes soon', 'o')); // 'sophomore'
console.log(mostLetterWord('I hope sophomore year comes soon', 's')); // 'sophomore'