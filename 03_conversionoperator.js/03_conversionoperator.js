let value = 3
let negvalue = -value

console.log(negvalue) // o/p : -3

console.log(2+2); // o/p : 4
console.log(2-2); // o/p : 0
console.log(2*2); // o/p : 4
console.log(2**5); // o/p : 32
console.log(2/2); // o/p : 1
console.log(2%2); // o/p : 0

let str1 = "hello"
let str2 =" coder"

let str3 =  str1+ str2
console.log(str3);  // o/p : hello coder

console.log("2"+ 2 ); // o/p : 22
console.log(2+"2"); // o/p : 22
console.log("2"+"2"); // o/p : 22

console.log("2"+2+2); // o/p : 222

console.log(2+2+"2"); // o/p : 42 

// Note//
//There’s no conversion to boolean. All objects are true in a boolean context, as simple as that. There exist only numeric and string conversions.
//The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
//As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts.

console.log((3+4)*2 %3); // o/p : 2

console.log(true) // o/p 1

console.log(+true) // o/p  true


let gameCounter = 100
gameCounter++;
console.log(gameCounter); // o/p 101

// Trick

let roundCounter =100
++roundCounter;
console.log(gameCounter); // o/p 101


