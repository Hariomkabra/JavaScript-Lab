// for of


// [ "","",""]
// [ {}, {}, {}]

//const arr = [1, 2, 3, 4, 5]

// objects,array,strings are iterable we can use for of loop

// for (const num of arr) {
//     //console.log(num)
// } // o/p 1 2 3 4 5

// const greetings = "Hello World"
// for (const greet of greetings) {
//     //console.log(`each char is ${greet}`)
// } // o/p each char is H each char is e each char is l each char is l each char is o each char is each char is W each char is o each char is r each char is l each char is d

// maps  => The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); // Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }

// for (const [key, value] of map) {
//      console.log(key, ':-', value);
// } // o/p IN :- India USA :- United States of America Fr :- France

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
     
} // o/p TypeError: myObject is not iterable
