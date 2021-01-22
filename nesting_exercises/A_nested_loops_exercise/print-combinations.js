// Write a function `printCombinations`that accepts two arrays as arguments. The function should
// print all combinations of the elements generated by taking an element from the first array and
// and an element from the second array. The function doesn't need to return any value. It
// should just print to the terminal.
let printCombinations = function(arr1, arr2){
  for (let i=0; i < arr1.length; i++){
    for (let j = 0; j< arr2.length; j++){
      console.log(arr1[i],arr2[j]);
      
    }
  }
}

let colors = ["gray", "cream", "cyan"];
let clothes = ["shirt", "flannel"];
printCombinations(colors, clothes);
// prints
//  gray shirt
//  gray flannel
//  cream shirt
//  cream flannel
//  cyan shirt
//  cyan flannel

printCombinations(["hot", "cold"], ["soup", "tea"]);
// prints
//  hot soup
//  hot tea
//  cold soup
//  cold tea