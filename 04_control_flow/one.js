// if

//if (true) {     // true is a condition if these is true then and then only these scope can run  // it is a boolean value
  //console.log('true');
//}

//if ( 2 == "2")  { // == is a comparison operator it will compare only value not datatype
  //console.log('correct'); // o/p : correct
//}

//const isuserloggedin = true; // true is a boolean value
//const temp = 50; // 20 is a number value

//if (temp ===51) {
  //console.log(' temp less than 30');
//} else {
  //  console.log('temp is greater than 30');
//}
//console.log('no  cold outside!'); //o/p : temp is greater than 30

//const score = 200;

//if (score > 100){
  //  let  power = 'fly'
   // console.log(`user power: ${power}`);

//}

// const balance = 1000;
// if (balance < 500) {
//     console.log('less than 500'); 
// } else if (balance < 750) {
//     console.log('less than 750');
// } else (balance < 900) 
//     console.log('more than 900'); // o/p : less than 750

const userloggedin = true;
const debitcard  = true;
const oggedInFromGoogle = false;
const userloggedinFromFacebook = false;

if (userloggedin && debitcard && 2 ==3 ) {
    console.log('you can purchase'); // o/p : you can purchase
}

if (userloggedin || oggedInFromGoogle) {
    console.log('user logged in'); // o/p : user logged in
}


