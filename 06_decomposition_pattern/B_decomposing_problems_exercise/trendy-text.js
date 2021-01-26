// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.


let removeLastVowel = function(string) {
  let vowels ="aeiou";
  for (let i = string.length - 1; i >= 0; i-- ){
    if (vowels.includes(string[i]))
    {return string.slice(0,i) + string.slice(i+1)}
  }
  return string;
};


let trendyText = function(sent ){
  let words = sent.split(" ")
  let newWords = [];
  words.forEach(function(word){
    newWords.push(removeLastVowel(word));
  })
  return newWords.join(" ")
};

console.log(trendyText("the concert will be epic")); // 'th concrt wll b epc'
console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'