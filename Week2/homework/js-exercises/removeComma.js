'use strict'

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);
//  the first parameter to replace() remove comma and then replace to the space
myString = 'hello,this,is,a,difficult,to,read,sentence'.replace(/,/g , " ");
console.log(myString);
