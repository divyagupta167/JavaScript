// const User1 = new Object() //singleton object
// const User2 = {} // non singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Divya"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//objects inside a objects
 const regularUser = {
    email :"some@email.com",
    fullname:{
        userFullname:{
            fisrtname:"divya",
            lastname:"gupta"
        }
    }
 }


 console.log(regularUser.fullname.userFullname.fisrtname);
//  console.log(regularUser.fullname?.userFullname.fisrtname); here fullname? is used if in any case fullname not present then

//combining of objects
const obj1 = {
    1:"a",
    2:'b',
    3:'c'
}

const obj2 = {
    5:"a",
    6:'b',
    7:'c'
}

// const obj3 = {obj1,obj2} // a new object with two object inside it

const obj3 = Object.assign(obj1,obj2) // a new object in key value pairs

const obj4 = Object.assign({},obj1,obj2) // for more than 2 objects
// giving an empty object, it will be the target, all the other objects are put into the traget


//spread operator

const obj5 = {...obj1,...obj2}
console.log(obj5)


//array objects
const users = [
    {
        id:1,
        name:'divya'
    },
    {
        id:2,
        name:'divya'
    },
    {
        id:3,
        name:'divya'
    },
    {
        id:4,
        name:'divya'
    }
]


users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns array datatype 
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Destructuring

const course = {
    name:"javascript",
    price:"999",
    teacher:"sir"
}

const {name, price, teacher}=course

const {name:instructor}=course

//react destructuring
const navbar =({company})=>{
  
}
navbar(company = "divya")

//API's
//JSON => { }
// {
//     'name':"javascript",
//     'price':"999",
//     'teacher':"sir"
// }

// Array => [{},{},{}]
// randomuserme api