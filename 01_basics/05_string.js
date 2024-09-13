const name ="Hariom"
const repoCount = 50

console.log(name+ repoCount+"value");  // output "Hariom50value"

console.log(`Hello My Name is ${name} and my repo count is ${repoCount} `);  //o/p "Hello My Name is Hariom and my repo count is 50" 

const gameName = new String('Hariom - HK')

console.log(gameName[0]); //o/p "H"
console.log(gameName.__proto__); //o/p "{}""

console.log(gameName.length); //o/p "6"
console.log(gameName.toUpperCase()); //o/p "HARIOM"


console.log(gameName.charAt(3)); 
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString); //o/p  "Hari"


const anotherString = gameName.slice(-7,4)
console.log(anotherString); 
 
const newStringOne = "     Hariom     "
console.log(newString); // o/p "    Hariom"
console.log(newString.trim); // o/p "Hariom"

const url  = "https://hariom.com/hariom.com//hariom%20kabra"

console.log(url.replace("20" , "-"));  // o/p "https://hariom.com/hariom.com//hariom%-kabra"
console.log(url.includes(" sundar "));  //o/p false

console.log(gameName.split('-'));  // o/p  "[ 'Hariom ', ' HK' ]"

