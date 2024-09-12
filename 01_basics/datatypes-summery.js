//Primitive Data Type (Call by values)

// 7 Types : String , Number , Boolean , null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLOggedIn=false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('1123')

console.log(id===anotherId); //false

const bigNumber = 12432567n


//Reference Type(Non Primitive)

//Array ,Object , Function

 const hero = ["python","javascript","C"]
let myObj = {
    name : "hariom",
    age  : 22,
 }

 //function(){} // Defination of the function

 const myfunction = function (){
   console.log("Hello world"); //false
 }

 console.log(typeof digNumber); //undefined
 console.log(typeof outsideTemp); // object
 console.log(typeof myfunction); // function

 

//Return type of variables in JavaScript
//1) Primitive Datatypes
  //     Number => number
    //   String  => string
    // Boolean  => boolean
    //   null  => object
    //   undefined  =>  undefined
    //   Symbol  =>  symbol
    //   BigInt  =>  bigint

//2) Non-primitive Datatypes
  //     Arrays  =>  object
    //   Function  =>  function
    //  Object  =>  object

    //******************************* */

    //Stack (Primitive) ,Heap(Non-Primitive)

    let myName = "HriomKabra"

    let anotherName = myName

    anotherName="sarangkabra";

    console.log(anotherName); //sarangkabra
    console.log(anotherName); //sarangkabra

    let userOne = {
      email : "userone@gmail.com",
      upi: "user@ybl"
    }

    let userTwo = userOne

    userTwo.email="Hariom@gmail.com "

    console.log(userOne.email); //Hariom@gmail.com 
    console.log(userTwo.email); //Hariom@gmail.com 
    