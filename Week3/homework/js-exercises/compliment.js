"use strict"

function giveCompliment(name) {
let compliments = ['amazing', 'super', 'the best', 'awesome', 'glorious', 'clever', 'gifted', 'adorable', 'brave', 'honest'];
//variable to choose a random value from the array compliments
let rand = compliments[Math.floor(Math.random() * compliments.length)];
return 'You are' + ' ' + rand + ',' + ' ' + name + '!';
}
console.log(giveCompliment('Serafima'));
console.log(giveCompliment('Serafima'));
console.log(giveCompliment('Serafima'));