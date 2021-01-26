// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.
let doubleVowel = function(string){
  let vowels ="aeiou";
  newStr="";
  for (let i=0; i < string.length; i++){
    let char = string[i];
    if ( vowels.includes(char) ){
      newStr += char.repeat(2);
    }else{
      newStr += char;
    }
  }
  return newStr;

};

let funnyPhrase = function(sent){
  let words = sent.split(" ");
  let newWords =[];
  words.forEach (function(word, i) {
    if (i % 2 === 0){
      newWords.push(word);
    }else{
      newWords.push(doubleVowel(word))
    }
  })
  return newWords.join(" ")
}
console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'