'use strict'

const cartForParty = {
    beer: 0.89,
    chips: 0.60,
    cheese: 2.20,
    bread: 0.99,
    sausage: 3.20
};

function calculateTotalPrice(obj) {
    let totalPrice = 0;
    //go through the all properties of the object 
    for(let key in obj) {
        //wether our objects contain any properties
        if(obj.hasOwnProperty(key)) {
            //sum up all the properties ​​in the object
            totalPrice += (obj[key]*100);
        }
    }
    return "Total: € " + totalPrice/100;
}
console.log(calculateTotalPrice(cartForParty));

