"use strict"
//Declare 2 variables
let mixTypes = ['winter', 30, {car: 'Audi'}, true];
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// to get the length of each array
console.log('The length of the array mixTypes is' + ' ' + mixTypes.length);
console.log('The length of the array days is' + ' ' + days.length);
// a conditional statement that checks if both are of equal length
mixTypes.length == days.length ? console.log("They are the same!") : console.log("Two different sizes!");

