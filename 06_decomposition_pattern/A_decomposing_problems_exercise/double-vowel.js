// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
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

console.log(doubleVowel("runner")); // 'ruunneer'
console.log(doubleVowel("stoplight")); // 'stoopliight'
console.log(doubleVowel("gardener")); // 'gaardeeneer'