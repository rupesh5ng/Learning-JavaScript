// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return the an array of words that begin with the prefix.
let pickPrefix = function(strings, prefix){
  let newStrings =[];
  strings.forEach(function(word) {
    if (word.indexOf(prefix) === 0) {
      newStrings.push(word);
    }
  });
  return newStrings;
}
console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));
// ['connect', 'concert']

console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
// [''mistake', 'misspeak', 'mission']