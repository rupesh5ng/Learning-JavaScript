// Make a prediction for what it will print. Run
// it.
let recipe = {
  name: "Old Fashioned Pancakes",
  difficulty: "easy",
  tasty: true,
  ingredients: ["eggs", "milk", "butter", "flour", "sugar"],
};

console.log(recipe.name);
console.log(recipe["name"]);
console.log(recipe.ingredients.length);
console.log(recipe.calories);

let someVariable = "difficulty";
console.log(recipe[someVariable]);
console.log(recipe.someVariable);

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}