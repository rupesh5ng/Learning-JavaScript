let apple;
console.log(apple);
// undefined

apple = 5;
console.log(apple);
// 5

apple + 1;
console.log(apple);
// 5 , because variable is not changed its still 5

apple += 1;
console.log(apple);
// 6

let banana = apple;
console.log(banana);
// 6

banana = banana / 2;
console.log(banana);
// 3

console.log(apple);
6