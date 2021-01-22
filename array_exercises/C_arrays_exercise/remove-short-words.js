// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

let removeShortWords = function(sent){
  let words = sent.split(" ");
  let  newWords =[];
  for (i = 0; i < words.length; i++){
    if (words[i].length >= 4) {
      newWords.push(words[i]);
    }
  }
  return newWords.join(" ")
}
console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'