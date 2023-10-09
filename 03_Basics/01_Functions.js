
function name() {
    console.log("divya");
}

name() //runs
name // only reference


function add(num1,num2) { //here parameters passed
    console.log(num1 + num2);
    
}

add(3,4) // here arguments passed

const result = add(7,8)
console.log(result); //undefined

function name2(n1, n2) {
    // let sum = n1 + n2
    // return sum;
    return n1 +n2
}

const result2 = name2(7,8)
console.log(result2); //prints values as return statement is present

//return k baad kuch bhi print nhi hota h



function loginMessage(name="sam") { //sam is deafult, if no value entered
    return `${name} just logged in`
}

console.log(loginMessage("divya"));

function price(...num1){ // here ... refers as "rest-operator", returns an array
    return num1
}
// console.log(price(8));
console.log(price(8,8,9,5,6,7));

function price(val1, val2, val3,...num1){  // first 3 goes to variables and rest to an array
    return num1
}


//Object with function
const userName = {
    name :"divya",
    id:1
}

function handleObject(anyobj) {
    console.log(`User name is ${anyobj.userName} and 
    price is ${anyobj.price}`);
}
// handleObject(userName)
//OR
handleObject({
    name :"divya",
    id:1
})


//Arrays and function
const mYArr = [200,400,600,700,898]

function returnValue(getArr) {
    return getArr[1]
}


// console.log(returnValue(mYArr));
//OR
console.log(returnValue([1,2,3,4,5,6,7]));



//Function Scope