'use strict'

const numChildren = [2, 4, 1, 5, 3];
const partnerNames = ['Peter', 'Ivan', 'Karl', 'Albert', 'Denis'];
const locations = ['Israel', 'Italy', 'Spain', 'France', 'Germany'];
const jobs = ['developer', 'manager', 'actor', 'teacher', 'veterinarian'];

function tellFortune(numChildren, partnerNames, locations, jobs) {
//get random item in any array
        let randItem = function (item) { 
        return item[Math.floor(Math.random() * item.length)];
        }
    return "You will be a " + randItem(jobs) + " in " + randItem(locations) + ", " + "married to " + randItem(partnerNames) + " with " + randItem(numChildren) + " kids."
}
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));