
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