'use strict'

function calculator(score, maxScore) {
    // convert the score to %
    let percentage =  Math.round((score /maxScore)*100);
    let grade;
    // look for a grade corresponds with that percentage
    switch (true) {
        case percentage >= 90 && percentage <= 100:
            grade = 'A';
            break;
        case percentage >= 80 && percentage < 89:
            grade = 'B';
            break;
        case percentage >= 70 && percentage < 79:
            grade = 'C';
            break;
        case percentage >= 60 && percentage < 69:
            grade = 'D';
            break;
        case percentage >= 50 && percentage < 59:
            grade = 'E';
            break;  
        case percentage >= 0 && percentage < 49:
            grade = 'F';
    }
return `You got a ${grade} (${percentage}%)!`
}

console.log(calculator(63, 100));
console.log(calculator(34, 100));
console.log(calculator(97, 100));
