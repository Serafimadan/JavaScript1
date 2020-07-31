'use strict'

const shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(item) {
    //plus new element in the end of array
    shoppingCart.push(item);
    //condition for array with new elements
if (shoppingCart.length > 3) {
    shoppingCart.shift() && shoppingCart.join(item);
}
return "You bought " + shoppingCart + "!"
}
console.log(addToShoppingCart('chocolate'));
console.log(addToShoppingCart('waffles'));
console.log(addToShoppingCart('tea'));