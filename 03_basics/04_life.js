// mmediately Invoked Function Expression (IIFE)

// normal function // name IIFE
function life () {
    console.log('Life is good!');
}
 life();
 // o/p : Life is good!

 // IIFE
    (function () {
        console.log('Life is good!');
    })();
    // o/p : Life is good!

    // () = function expression/declaration
    // () = function call

// Arrow function

(() => {
    console.log('Life is good with positive mindset !');
})();
// o/p : Life is good with positive mindset !

// Arrow function with parameter
(( name) => {
    console.log(`Life is good with positive mindset ${name}`);
})('Hariom');
// o/p : Life is good with positive mindset Hariom