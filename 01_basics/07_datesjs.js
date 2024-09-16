// Dates

//let myDates = new Date()
//console.log(myDates); // o/p "2024-09-16T13:17:05.938Z"

//let myDates = new Date()
//console.log(myDates.toString());  // o/p "Mon Sep 16 2024 13:21:35 GMT+0000 (Coordinated Universal Time)"

let myDates = new Date()
console.log(myDates.toISOString()) // o/p "2024-09-16T13:24:08.544Z"

console.log(myDates.toJSON());  // o/p "2024-09-16T13:24:08.544Z"

console.log(myDates.toLocaleDateString());  // o/p "9/16/2024"
 
console.log(myDates.toLocaleTimeString()); // o/p "1:24:08 PM"
