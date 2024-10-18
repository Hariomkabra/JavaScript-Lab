//singleton
//Object.create

// object Literals

const mySym = Symbol ("key1")
const JsUSer = {

    name :"Hariom",
    "full name ": "Hariom S. Kabra",
    age :" 22",
   [ mySym]:" mykay1",
    location: "jaipur",
    email: "hariom@github.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"],
    
}

console.log(JsUSer.email)  // o/p hariom@github.com
console.log(JsUSer["email"])  // o/p hariom@github.com
console.log(JsUSer.mySym)  // o/p  mykay1
console.log(JsUSer[mySym]) // o/p  mykay1
console.log(JsUSer.lastLoginDays) // o/p [ 'Monday', 'Saturday' ]

JsUSer.email="hariom@gamil.com"


JsUSer.greeting=function(){
    console.log("Hello Js user");

}

JsUSer.greeting=function(){
    console.log("Hello Js user, ${ this.name}");  //  o/p [Function (anonymous)]
    
}

console.log(JsUSer.greeting);