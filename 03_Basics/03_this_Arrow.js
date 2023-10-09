
// this refers current context
// arrow function does not have  this

const user = {
    username :"divya",
    price :999,

    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);
    console.log(this); // returns user value
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); // returns an empty object in node environment

// this return "window" in browser  for browser environment

function happy(){
    console.log(this); // for node environment, returns a lot of value

}

function happy2(){
    let username = "divya"
    console.log(this.username);
}

happy2() // returns undefined


//Arrow Function

const happy3 =()=>{
    let username = "divya"
    console.log(this.username); // return undefined
    console.log(this); // returns empty parenthesis
}

const addTwo=(n1 , n2)=>{
    return n1 + n2
}

//Syntax for implicit return, no need to write return
const addTwoNew=(n1 , n2)=>  n1 + n2
// OR
const addTwoNew2=(n1 , n2)=> ( n1 + n2 )
// OR
const addTwoNew3=(n1 , n2)=> ( {username:"divya"} )

console.log(addTwo(3,4));

const MyArr = [2,5,6,7,8]

