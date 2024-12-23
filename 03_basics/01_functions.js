
function sayMyname(){
    console.log ("H");
    console.log ("A");
    console.log ("R");
    console.log ("I");
    console.log ("O");
    console.log ("M");
}

//sayMyname(); // o/p : H A R I O M

//  function addTwoNumbers( number1,numer2){ console.log(number1 + numer2); }

//  addTwoNumbers(3,4); // o/p : 7

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sarang"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hariom")) // o/p : Hariom just logged in
// console.log(loginUserMessage("Hariom")) // o/p : Hariom just logged in


function calculateCartPrice(val1, val2, ...num1){
    return num1
} 

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Hariom",
    prices: 177
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject. username} and price is ${anyobject.price}`); // o/p : Username is Hariom and price is 399
} 
// BAcktick is used to add variables in string(for string interpolation)
// handleObject(user)
handleObject({
    username: "Hariom",
    price: 399
})

const myNewArray = [100, 200, 100, 500] 

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // o/p : 200
console.log(returnSecondValue([100, 200, 700, 2000]));  // o/p : 200