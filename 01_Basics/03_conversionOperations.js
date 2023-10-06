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


//        OPEARTIONS              //
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

let st1 = "div"
let st2 = "ya"

let st3 = st1+st2
console.log(st3);

console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32


//precedence
// Exponentiation - **
// Multiplication/Division/Remainder - * / / / %
// Addition/Subtraction - + / -


console.log(true); //true
console.log(+true); // 1
console.log(true+); //error
console.log(+""); // 0
console.log(""+);


let num1,num2,num3
num1=num2=num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);