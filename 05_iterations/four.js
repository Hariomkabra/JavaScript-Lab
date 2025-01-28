const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple",
    py : "python"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`); // o/p js shortcut is for javascript cpp shortcut is for C++ rb shortcut is for ruby swift shortcut is for swift by apple py shortcut is for python
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
} // o/p 0 1 2 3 4

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
