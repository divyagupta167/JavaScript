const score = 400

const balance = new Number(100)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.90658
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//max and min value of number are also there



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

//MATHS

console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4
console.log(Math.min(5,6,7,8));
console.log(Math.max(5,6,7,8));

console.log(Math.random()); //between 0 and 1
console.log((Math.random()*10)+1); 


//formula for random
const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1)) + min));


