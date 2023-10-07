const name = "divya"
const count = 70

console.log(name + count + "Value"); // not recommended


// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${count}`); // recommended

//another way to declare string
const gameName = new String ('divyaGupta-is-my-name')  // as object

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherStr = gameName.slice(-8,4) // same as substring but we can use negative value also

const newStringOne = "         divya             "
console.log(newStringOne);
console.log(newStringOne.trim());// removes empty spaces


const url = "https://divyagutpa@google.com"
console.log(url.replace('@','-'));

console.log(url.includes('divya'));

console.log(gameName.split('-'));