// Dates

let myDates = new Date()  // "comment it as Requirement"
console.log(myDates); // o/p "2024-09-16T13:17:05.938Z"

let myDates = new Date()
console.log(myDates.toString());  // o/p "Mon Sep 16 2024 13:21:35 GMT+0000 (Coordinated Universal Time)"

let myDates = new Date()
console.log(myDates.toISOString()) // o/p "2024-09-16T13:24:08.544Z"

console.log(myDates.toJSON());  // o/p "2024-09-16T13:24:08.544Z"

console.log(myDates.toLocaleDateString());  // o/p "9/16/2024"
 
console.log(myDates.toLocaleTimeString()); // o/p "1:24:08 PM"

let myCreatedDate = new Date(2024,0,23)
console.log(myCreatedDate);  // o/p "2024-01-23T00:00:00.000Z"
console.log(myCreatedDate.toDateString()); // o/p "Tue Jan 23 2024"

let myCreatedDate = new Date(2024,0,24.5,3)
console.log(myCreatedDate.toLocaleDateString()); // o/p "1/24/2024"

let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleDateString()); // o/p "1/14/2024"

let myTimeStamp =  Date.now()
console.log(myTimeStamp); // o/p "1726586986160"

let myCreatedDate = new Date(2024,0,24.5,3)
console.log(myCreatedDate.getTime()); // o/p "1706065200000" //milesecond
console.log(Date.now()/1000); // o/p "1726587230.403" //  value in decimal 

//  <<   ALTER  >>  //

console.log(Math.floor(Date.now()/1000)); // o/p "1726587359"


let newDate = new Date()

console.log(newDate);

console.log(newDate.getFullYear()); // o/p "2024"
console.log(newDate.getMonth()); // o/p "8"

//`${newDates.getDay()} and teh time`

newDate.toLocaleString('deault',{
    weekday: "long"
 })




