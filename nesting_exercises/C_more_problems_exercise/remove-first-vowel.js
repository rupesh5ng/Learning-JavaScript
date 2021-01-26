// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.
let removeFirstVowel = function(string) {
  let vowels ="aeiou";
  for(const [i, el] of string.split("").entries()){
    if (vowels.includes(string[i])){
      return string.slice(0,i) + string.slice(i+1)
    }
  }
}
console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'