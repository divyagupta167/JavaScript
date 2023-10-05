let score = "33abc";

console.log(typeof score); //string
console.log(typeof (score));  //string

let valueNumber = Number(score)
console.log(typeof valueNumber); //number
console.log( valueNumber); //NaN

let name = null;
console.log(name); //null

let name2 = undefined;
console.log(name2); //NaN

let isLogged = 1
let booleanLOggedIn = Boolean(isLogged)
console.log(booleanLOggedIn);  //gives true similarly for 0, gives false

// empty string gives 0 for number and false for boolean conversion

// Boolean true gives 1 and boolean false gives 0

/*
"33" = 33
"33abs" = NaN cannot be converted to number
true = 1; false= 0
""= false
"divya"= true

*/