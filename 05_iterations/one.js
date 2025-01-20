// for

for (let i = 0; i <= 10; i++) {
  //console.log(i);  // Output: 0 1 2 3 4 5 6 7 8 9 10
}

for (let i = 0; i <= 10; i++) {
   // console.log(i);  // Output: 0 1 2 3 4 5 6 7 8 9 10
    if (i == 5) {
     //   console.log('I am 5'); // Output: I am 5
    }
  }

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop ${i}`);       // Output: outer loop 1 2 3 4 5 6 7 8 9 10
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value${j} ,and inner loop ${i} `); // Output: Inner loop value1 ,and inner loop 1 2 3 4 5 6 7 8 9 10

        //console.log (i + ' * ' + j + ' = ' + i*j); // Output: 1 * 1 = 1 1 * 2 = 2 1 * 3 = 3 1 * 4 = 4 1 * 5 = 5 1 * 6 = 6 1 * 7 = 7 1 * 8 = 8 1 * 9 = 9 1 * 10 = 10

    }
}


let myArray = ['Hariom', 'suraj', 'kabra', ];

for (let i = 0; i < myArray.length; i++) {
    //console.log(myArray[i]);  // Output: Hariom suraj kabra
    //console.log(i); // Output: 0 1 2
}


// Break and Continue

 for (let index = 1; index <= 20; index++) {
     if (index == 5) {
         console.log(`Detected 5`); // Output: Detected 5
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);  // Output: Detected 5
       continue
   }
  console.log(`Value of i is ${index}`);
}

