// const tinder = new objects()

const tinderUser = {}

tinderUser.id ="786abc"
tinderUser.name= "Hariom"
tinderUser. isLoggedIn= false

//console.log(tinderUser); // o/p { id: '786abc', name: 'Hariom', isLoggedIn: false }

const regularUser={
    email : "some@gmail.com",
    fullname: {
        userfullname :{
            firstname : "Hariom",
            lastname :"Kabra"
        }
    }
}

//console.log(regularUser.fullname); // ō/p { id: '786abc', name: 'Hariom', isLoggedIn: false }

//console.log(regularUser.fullname.userfullname.firstname); // o/p { userfullname: { firstname: 'Hariom', lastname: 'Kabra' } }  //Hariom


//const obj1 = { 1: "a",2: "b"}
//const obj2 = { 3: "a",4: "b"}

//const obj3 ={ obj1,obj2} // o/p  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//console.log(obj3)

//const obj3 = Object.assign (obj1 , obj2) 
//console.log(obj3);  // o/p   { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  

//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//const obj3 = Object.assign ({},obj1 , obj2) 
//console.log(obj3);  // o/p   { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



const obj1 = { 1: "a",2: "b"}
const obj2 = { 3: "a",4: "b"}
const obj4 = { 5: "a",6: "b"}


//const obj3 = Object.assign ({},obj1 , obj2, obj4) 
//console.log(obj3); //o/p // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//const obj3 = {...obj1,...obj2 }
//console.log(obj3); //o/p //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2 }
console.log(obj3); // o/p // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email 
 console.log(tinderUser);  // o/p //  { id: '786abc', name: 'Hariom', isLoggedIn: false }

 console.log(Object.keys(tinderUser));  // o/p // [ 'id', 'name', 'isLoggedIn' ]
 console.log(Object.values(tinderUser)); // o/p //   [ '786abc', 'Hariom', false ]
 console.log(Object.entries(tinderUser)); // o/p //  [ [ 'id', '786abc' ], [ 'name', 'Hariom' ], [ 'isLoggedIn', false ] ]
 
 console.log(tinderUser.hasOwnProperty('isLoggedIn')); // o/p //true


const course = {
    coursename: "Hariom",
    price: "777",
    courseInstructor: "Hariom"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor); // o/p //  true

