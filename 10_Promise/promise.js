// promise can be handled by async and await also
// promise is normally resolved by .then, .catch, .finally

//syntax one
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()  // it connects promise to 'then'
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
})



//syntax two
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 is resolved");
    
})


//syntax three
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"divya",mail:"new@gmail.com"})
    }, 1000);
})
promiseThree.then((user)=>{
    console.log(user);
})



//syntax four
const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username:"divya",mail:"new@gmail.com"})
        }else{
            reject('Error, something is wrong')
        }
        
    }, 1000);

})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Finally the promise is either resolved or rejected");
})


//syntax five
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username:"java",mail:"fun@gmail.com"})
        }else{
            reject('Error,of five something is wrong')
        }
        
    }, 1000);

})

//while using async await always use try catch, as 
// it does not handle erros
async function consumePromiseFive(){
   try {
    const response = await promiseFive
   console.log(response);
   } catch (error) {
    console.log(error);
    
   }
}

consumePromiseFive()



////////////////////////////////////////////

async function getallUsers(){
    try {
        //fetch only requires a url
    const response =await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await  response.json()
    console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}
getallUsers()


//fetch using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))