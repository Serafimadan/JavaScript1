'use strict'

let recipe = { };
recipe.title = 'Pancakes';
recipe.servings = 5;
recipe.ingredients = ['milk - 500ml', 'eggs - 2 st', 'salt - 1/2 tsp', 'sugar - 4 sp', 'flour - 200 gramm'];
console.log (recipe);
//iterate through all properties of the object (use for...in) 
// for(let item in recipe){
//     if(item == 'title'){
//         console.log("Meal name:",recipe[item]);
//     } else if (item == 'servings'){
//         console.log("Serves:",recipe[item]);
//     } else if (item == 'ingredients'){
//         console.log("Ingredients:",recipe[item].join(", "));
//     }
// }
for (let item in recipe){
    if (recipe.hasOwnProperty(item)) {
        console.log(item + ':' + ' ' + recipe[item]);
    } else {
console.log('You don\'t have an object!');
    }
}