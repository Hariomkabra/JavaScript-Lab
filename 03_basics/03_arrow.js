const user = {
    username: 'Hariom',
    price: 1999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to website`);  // this reffer to the current context (object)
    }
}

// user.welcomeMessage() // o/p: Hariom , Welcome to website
// user.username = "om"
// user.welcomeMessage() // o/p: om , Welcome to website

// function work (){
//     let  username = "Hariom"
//     console.log(this.username);
// }

// work() // o/p: {} // empty object

// const work = function () {
//     let username = "Hariom"
//     console.log(this.username);
// }


const work =  () => {
    let username = "Hariom"
    console.log(this.username);
}


work() // o/p: undefined

// const addTwo = function (num1 , num2 ) {
//     return num1 + num2
// }  
// In curly braces we have to use return keyword

//const addTwo = (num1 , num2 ) => num1 + num2

//const addTwo = (num1 , num2 ) => num1 + num2

const addTwo = (num1 , num2 ) => ({username: "Hariom"})


// without curly braces we can directly return the value


console.log(addTwo(4 , 8 )) // o/p: 12


const myArray = [2,4,5,6]
