// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.
let alternatingCaps = function(sent){
  let words = sent.split(" ");
  let newWords =[];
  for (i =0; i < words.length; i++){
    if (i% 2 === 0){
      newWords.push(words[i].toLowerCase());
    }else {
      newWords.push(words[i].toUpperCase());
    }
  }
  return newWords.join(" ")
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'