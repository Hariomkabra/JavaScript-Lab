
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

