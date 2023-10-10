// for in 


// Objects
const myObj = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}

for (const key in myObj) {
    // console.log(key); // prints keys
    console.log(myObj[key]); // prints values of keys
}


//Arrays

const programming = [1,2,3,4,5,6,7,8,9]

for (const key in programming) {
  console.log(key);  // prints the index of array
  console.log(programming[key]);
}

//Maps
// cannot  be used to iterate maps, not iterable
