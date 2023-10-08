//two ways to declare objects 
//1. as constructors and 2. as literals

//singleton --. a single object from a constructor
// we mostly declare objects as literals, and it does not make singleton

//as constructors
// Object.create()

//object literals
//key of object here is considered string

const mySymbol = Symbol("Key1")

const JsUser = {
    name:"divya",
    "full name": "divya gupta",
   [ mySymbol] : "myKey1",
    age:18,
    location:"Kolkata",
    email:"divya@gmail.com",
    isLogged: false,
    lastloginDays:['mon','tue']
}

//access objects -->2 ways dot and square brakets

console.log(JsUser.email); //no need to give in double quotes
console.log(JsUser["email"]); //need to give in double quotes
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);  //syntax  to use symbol

JsUser.email = "divya@chatgpt.com" // to overirde data
// Object.freeze(JsUser) // no further changes can be made to the object

//functions are treated as variables also in js

JsUser.greeting = function () {
    console.log("Hello Js User");
}


console.log(JsUser.greeting); // function anonymous, only reference, not executed
console.log(JsUser.greeting()); // returns value of function


JsUser.greeting2 = function () {
    console.log(`Hello Js User, ${this.name} `);
    console.log(`Hello Js User, ${this["full name"]} `);
}

console.log(JsUser.greeting2());