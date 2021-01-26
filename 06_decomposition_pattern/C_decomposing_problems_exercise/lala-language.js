// Write a function `lalaLanguage` that accepts a sentence string as an argument. The function should
// return a new sentence where words longer that 3 characters are modified. Modified words should have
// each vowel followed by 'l' and the same vowel repeated again. See the examples.
let changedWord = function(word){
  let newWord = "";
  let vowels ="aeiou"
  for (let i = 0; i < word.length; i++){
    let char = word[i];
    if (vowels.includes(char)){
      newWord += char + "l" + char;
    }else{
      newWord += char;
    }
  }
  return newWord;
};


let lalaLanguage = function(sent){
  let words = sent.split(" ");
  let newWords=[];
  words.forEach ( function(word, i) {
    if (word.length > 3){
      newWords.push(changedWord(word));
    }else{
      newWords.push(word);
    }
  })
  return newWords.join(" ");
};


console.log(lalaLanguage('this is pretty strange')); // 'thilis is preletty stralangele'
console.log(lalaLanguage('can you speak our language')); // 'can you spelealak our lalangulualagele'