console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


console.log("2">1);  //true
console.log("02">1) //true, string is converted to number

console.log(null > 0); //false
console.log(null == 0); //false 
console.log(null >= 0); //true

// the reason is that an equality check == and comparison > < > >= <= work differently
// comparison convert null to a number, treating it as 0

console.log(undefined > 0); //false
console.log(undefined == 0); //false 
console.log(undefined >= 0); //false

// === checks value strictly along with datatype
