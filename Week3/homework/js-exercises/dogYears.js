'use strict'

function calculateDogAge(number) {
//get dog age in human years
let realAge = number * 7;
    return "Your doggie is" + " " + realAge + " " + "years old in dog years!";
}

console.log(calculateDogAge(3));
console.log(calculateDogAge(7));
console.log(calculateDogAge(1));