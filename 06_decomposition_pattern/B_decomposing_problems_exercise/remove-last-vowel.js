// Write a function `removeLastVowel` that accepts a string as argument. The function should return
// the string with its last vowel removed. Vowels are the letters a, e, i, o, u
let removeLastVowel = function(string) {
  let vowels ="aeiou";
  for (let i = string.length - 1; i >= 0; i-- ){
    if (vowels.includes(string[i]))
    {return string.slice(0,i) + string.slice(i+1)}
  }
  return string;
}
console.log(removeLastVowel("speaker")); // 'speakr'
console.log(removeLastVowel("trading")); // 'tradng'
console.log(removeLastVowel("thunder")); // 'thundr'
console.log(removeLastVowel("myth")); // 'myth'