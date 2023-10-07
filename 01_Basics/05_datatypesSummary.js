//Primitive --> call by value, original reference of memory is not given, copied value is given
// 7 types :String, Number, Boolean, null, undefined,Symbol(unique),BigInt

// JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime, not at compile time.

// 100 and 100.3 both comes under number

const temp = null;
let mail ; // undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid); // false

const big = 3837563897409n


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Reference type(Non-Primitive)
// dataype for non primitive are function, especially for function it is function object
// Array, Objects, Functions

const heroes = ['thor','wanda', 'panther'];
let obj = {
    name:"divya",
    age:23,
}

const myfunc = function () {
    console.log("Hello world");
}

// use typeof to get type of type of datatypes, null is object type

//datatype of function is function


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack( Primitive) , Heap(Non- Primitive)
// for stack a copy of the original value is given, 
// while for heap reference of the original value is given, change is reflected in original value


let name = "divya"
let name2 = name
 name2 ="gupta"
 console.log(name);
 console.log(name2);

 let userOne = {
    email:"user@google.com",
    upi:"12334"
 }

 let userTwo = userOne
 userTwo.email = "divya@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);

