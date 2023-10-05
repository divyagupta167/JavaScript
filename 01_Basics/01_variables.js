const accountId = 9876  // cannot be changed
let accountEmail = "divya@gmail.com"  
var accountPassword = "12345"
accountCity = "Jaipur" // this is also possible
let accountState; // this will print undefined

// accountId = 8;  not allowed

accountEmail = "divya@mail.com"

accountPassword = "9876"

accountCity ="Bengaluru"



console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


// { this is scope between the curly braces }
/*
Prefer not to use var because of issue in block scope and functional scope
*/