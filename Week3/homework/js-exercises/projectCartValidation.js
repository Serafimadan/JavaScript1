'use strict'

function validateCreditNumber(cardNumber) {
    let totalSum = 0; //variable for condition about summ all numbers in our argument cardNumber
if (cardNumber.length !== 16 ) { //check quntity it must be 16 numerals
    return ("Invalid! The input " +  cardNumber + " should contain 16 numerals!");
} else if (isNaN(cardNumber)) { // check type for characters it must be number
    return ("Invalid! The input " +  cardNumber + " should contain only numbers!");
    } else if (cardNumber[15] % 2 !== 0) { //check the last number it must be even
        return ("Invalid! The input " +  cardNumber + " has odd the last number," + " but the last number must be even!");
            } else { for (let i = 0; i < cardNumber.length; i++) { //check condition taht at least two different numbers should be represented
                        if (cardNumber[0] != cardNumber[i]) {
                            break;
                        } else if (i == cardNumber.length - 1) {
                                return ("Invalid! The input " +  cardNumber + " should contain at least 2 different types of numbers!");
                            }
                         totalSum += parseInt(cardNumber[i]); //summ all numbers in function's argument
                    }
                }
if (totalSum <= 16 ) { //check the sum of all the numbers it must be greater than 16
    return ("Invalid! The sum of all the numbers in the input " +  cardNumber + " must be greater than 16!");
}
return "Success! The input " + cardNumber + " is a valid credit card number!";
}

console.log(validateCreditNumber('111111111111111'));
console.log(validateCreditNumber('1111111111111110'));
console.log(validateCreditNumber('a92332119c011112'));
console.log(validateCreditNumber('4444444444444444'));
console.log(validateCreditNumber('6666666666661666'));