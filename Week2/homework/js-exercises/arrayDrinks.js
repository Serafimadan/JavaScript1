'use strict'

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
let index = 0;
// quantity of each kind of drinks in the drinkTray
let numDrink = [0, 0 , 0];
// 5 itarations to push a drink into the drinkTray
for (let i = 0; i < 5; i++){
    let drinkName = drinkTypes[index];
    numDrink[index]++;
    drinkTray.push(drinkName);
    // as index = 2 go to the next type of drinks
    if(numDrink[index] == 2){
        index++;
    }
}

console.log("Hey guys, I brought a" + " " + drinkTray.join(", ") + "!");