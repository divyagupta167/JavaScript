//object literal - methods and properties

const user ={
    username :"divya",
    count:8,
    signedIn:true,

    getUserDetails :function(){
        // console.log("Got User Details");
        console.log(`Username: ${username}`);//undefined
        console.log(`Username: ${this.username}`);
        console.log(this); // prints user value(object)
    }

}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // empty object {}


//Constructor Function 
// It gives new instance everytime

function User (username,count,isLogged){
    this.username =  username 
    this.count = count
    this.isLogged = isLogged

    this.greetings = function (){
        console.log(`Welcome ${this.username}`);
    }

    return this // implicitly return is defined whether we write return or not
}

// if we dont use new then previous value get override
const userOne = new User("divya",12,true)
const userTwo = new  User("gupta",10,false)


console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);

// search about instanceof

// importance of new
// creates an empty object called instance
// construction funnction is called
// this is injected
// we get the function 


