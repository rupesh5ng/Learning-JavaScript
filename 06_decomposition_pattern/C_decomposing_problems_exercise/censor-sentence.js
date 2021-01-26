// Write a function `censorSentence(sentence, targetWords)` that accepts a sentence string and an array
// of target words as arguments. The function should return a new sentence where any target words 
// have all of their characters replaced with '*'s.

let censorSentence = function(sentence, targetWords) {
  let words = sentence.split(" ");
  let newWords = [];
  words.forEach(function(word) {
    if ( targetWords.includes(word)) {
      newWords.push("*".repeat(word.length));
    }else{
      newWords.push(word);
    }
  })
  return newWords.join(" ");
};

console.log(censorSentence('where the heck is my celery', ['heck', 'celery'])); 
// 'where the **** is my ******'

console.log(censorSentence('why you little sweetheart', ['sweetheart', 'salad'])); // 'why you little **********'