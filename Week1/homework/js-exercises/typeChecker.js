"use strict"
//declare 2 variables
    let a = "hello"; 
    let c = 50;
//check data type   
    console.log(typeof a); 
    console.log(typeof c);
// comparison data types function
function typeCecker(firstArgument, secondArgument) {
typeof firstArgument == typeof secondArgument ? console.log("SAME TYPE") : console.log("Not the same...");
/*
if (typeof firstArgument == typeof secondArgument){
    console.log("SAME TYPE")
} else {
    console.log("Not the same...")
}
*/
} // result of comparison
typeCecker(a,c);
//declare 4 variables
let myCar = { car: 'Audi'};
let picture = { painter: 'Van Gogh'};
let color = "green";
let weather = "rainy"; 
//6 comparison statments
if (typeof color == typeof weather){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
};
if (typeof myCar == typeof picture){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
};
if (typeof weather == typeof myCar){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
};
if (typeof myCar == typeof color){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
};
if (typeof picture == typeof color){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
};
if (typeof weather == typeof picture){
    console.log("SAME TYPE");
} else{
    console.log("Not the same...");
};
//to check the type of all 4 variables
console.log(typeof myCar, typeof picture, typeof weather, typeof color,);
//to compare the type of 2 variables
typeCecker(myCar,color);
typeCecker(weather,myCar);
//to compare the type of another 2 variables
typeCecker(picture,color);
typeCecker(weather,picture);

