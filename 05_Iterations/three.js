// higher order array loops

// for of 
// It works for arrays, strings, map, but not for objects
// ["" "" ""]
// [{} {} {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world !"
for (const greet of greetings) {
    console.log(`${greet}`);
}


//Maps --. has unique values and in order
 
const map = new Map()
map.set('IN',"India")
map.set('US',"United states")
map.set('FR',"France")

console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
}


//objects

const myObj = {
    '1':'a',
    '2':'b'
}

for (const [key, value] of myObj) {
    console.log(key , value);
    // gives error, it is not iterable
}