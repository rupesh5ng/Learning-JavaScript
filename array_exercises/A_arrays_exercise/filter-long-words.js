// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

let filterLongWords = function(strArr){
  let newArr = [];
  for(let i = 0; i < strArr.length; i++){
    if (strArr[i].length < 5){
      newArr.push(strArr[i])
    }
  }
  return newArr
}
console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']