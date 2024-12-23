//var c = 700
 let a = 700

if (true) {
    let a  = 10
    const b = 20 
    //console.log("INNER: " ,a);
}

//console.log(a) // ReferenceError: a is not defined
//console.log(b) // ReferenceError: b is not defined
//console.log() 

// Nested Scope

function one () {
    const username = "Hariom "

    function two () {
        const website = "DELL"
        console.log(username)
    }

    //console.log(website) // ReferenceError: website is not defined

    two()   // o/p: Hariom
    }

//one()

if (true){
    const username = "Hariom"

    if (username === "Hariom") {
        const website = "DELL"
        console.log(username+ " " + website); // o/p: Hariom DELL
    }
    //console.log(website) // ReferenceError: website is not defined
}
///consoel.log(username) // ReferenceError: username is not defined

// ++++++++++++++++++ interesting ++++++++++++++++++

// Variable is most powerful in JS , it can hold any type of data


console.log(addone(6)) // o/p: 7

function addone (num){
    return num + 1
}



// addTwo(5)

// const addTwo = funciton (num){
//     return num + 2
// }

// in above code addTwo is not a function because it is declared as const and it is not hoisted
