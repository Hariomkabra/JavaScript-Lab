//const score = 200
//const balance = new Number (100)
//console.log(balance); // o/p "200"

//console.log(balance.toString().length); //"[Number : 100]"
//console.log(balance.toFixed(2));

//const otherNumber = 23.2343

//console.log(otherNumber.toPrecision(3)); // o/p "123"


//const hundereds = 100000
//console.log(hundereds.toLocaleString('en-IN')); // "10,00,000"

//**********************Maths*************** */

console.log(Math); //object math
console.log(Math.abs(4)); // o/p "4"
console.log(Math.round(7.3));// o/p "7"

console.log(Math.ceil(5.2)); // o/p "5"  //" ceil() rounds up a double or float number to the nearest Mathematical integer greater than or equal to the given floating-point number"

console.log(floor(5.9));  // o/p "5"  //"he floor() method rounds a number DOWN to the nearest integer."
 
console.log(Math.random()); // o/p "0.690075...." // it Provide the 0 & 1 Values.
console.log((Math.random()*10)+1); // o/p "6.1715...."
console.log((Math.random()*10)+1); // o/p "4.65030...."
console.log((Math. floor (Math.random()*10)+1));  // o/p "7"
const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max-min + 1) ))+min )