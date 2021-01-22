// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

let bleepVowels = function(string){
  let newStr = "";
  let vowels="aeiou"
  for (i=0; i < string.length; i++) {
    if (vowels.includes(string[i])){
      newStr += "*";
    }else{
      newStr += string[i];
    }
    
  }
  return newStr
};
console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'