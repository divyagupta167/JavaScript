let a= 10
const b = 20
var c = 30

//Scope => { }
// code inside the braces is called block scope
// everything outside the braces is global scope

console.log(a);
console.log(b);
console.log(c);


//Nested Scope
// basics of closures

function one() {
    const name = "divya"

    function two() {
        const id = 1234
        console.log(name);
    }
    console.log(id); // could not be accessed

    two();
}
one()

// It is like ice cream sharing, elders people share their portion but childrens do not share theirs


if (true) {
    const username = "divya"
    if (username==="divya") {
        const website = youtube
        console.log(username+" "+youtube);
        
    }
    console.log(website);//cannot be accessed
    
}
console.log(username); //cannot be accesed

///+++++++++++++++++++Interesting +++++++++++++//

//  if we are simply declaring a function in javascript
// we can call it before defining it,
// but if we are storing it in a variable then we cannot
// call before defining it, 
// This is basics of hoisting in javascript

addone(5)
function addone(){
    return num + 1
}

const addTwo = function (num) {
    return num + 2
    
}

addTwo(5)