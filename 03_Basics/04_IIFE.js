
//Immediately Invoked Function Expressions (IIFE)

function chai() {
    console.log(`DB CONNECTED`);   
}
chai()


// Syntax of IIFE
(function chocolate() {

    //named iife
    console.log(`DB CONNECTED`);   
})(); 

// IIFE does not know when to end scope , so we always 
// have to end it using a semicolon ;
// if we have to write two iife we must use semi colon

// (()=>{ })() using arrow function as function

// ()()

// Global Sccope k pollution se problem hota h, to remove that we use IIFE
  

// passing parameter in iife
((name)=>{
    // un-named iife 
    console.log(`${name}`);
})('divya')