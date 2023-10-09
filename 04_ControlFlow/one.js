if (true) {
    
} else {
    
}

// <,>, <=, >=, ==, ===, !=, !==

//inplicit scope
const balance = 500
if(balance > 500) console.log("test");



//Switch 
switch (key) {
    case value:
        
        break;

    default:
        break;
}


const month = 3;

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;

    default:
        break;
}


// falsy values
// false, 0 , -0, BigInt 0n, "", undefined, null, NaN

// truthy values
// true, "divya", "0", "false", " ", [],{}, function(){}


// array empty check
const mail = []

if (mail.length === 0) {
    console.log("empty");   
}

// object empty check
const obj = {}

if(Object.keys(obj).length ==== 0){
    console.log("empty");
}


// Interesting
false == 0 // true
false == '' // true
0 == ''// true



// Nulish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 //15
// val1 = null ?? 10 ?? 20 // 10


//Ternary Operator

condition ? true : false ;