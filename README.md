# JavaScript
A Code Repo for JavaScript


A Quick Guide to String Methods in JavaScript
Strings are a fundamental data type in JavaScript, representing sequences of characters. Manipulating strings is a common task in web development, and JavaScript provides a plethora of built-in methods to help with this. In this short guide, we'll introduce you to some of the most commonly used string methods.

1. length
The length property is not a method, but it's essential for every JavaScript developer to know. It returns the number of characters in a string.

javascript
Copy code
const greeting = "Hello, World!";
const length = greeting.length; // length will be 13
2. toUpperCase() and toLowerCase()
These methods allow you to change the case of the characters in a string.

javascript
Copy code
const message = "Hello, World!";
const upperCaseMessage = message.toUpperCase(); // "HELLO, WORLD!"
const lowerCaseMessage = message.toLowerCase(); // "hello, world!"
3. charAt(index)
The charAt() method returns the character at a specified index.

javascript
Copy code
const str = "Hello";
const char = str.charAt(1); // "e"
4. concat(str1, str2, ...)
This method concatenates two or more strings and returns a new string.

javascript
Copy code
const firstName = "John";
const lastName = "Doe";
const fullName = firstName.concat(" ", lastName); // "John Doe"
5. slice(start, end)
slice() extracts a portion of a string and returns it as a new string. The start index is inclusive, and the end index is exclusive.

javascript
Copy code
const str = "Hello, World!";
const sliced = str.slice(0, 5); // "Hello"
6. indexOf(substring, start) and lastIndexOf(substring, start)
indexOf() returns the index of the first occurrence of a specified substring. lastIndexOf() does the same, but starts searching from the end of the string.

javascript
Copy code
const sentence = "To be or not to be, that is the question.";
const index = sentence.indexOf("be"); // 3
const lastIndex = sentence.lastIndexOf("be"); // 16
7. replace(searchValue, replaceValue)
replace() searches a string for a specified value and replaces it with another value.

javascript
Copy code
const str = "Hello, World!";
const newStr = str.replace("World", "Universe"); // "Hello, Universe!"
8. trim()
trim() removes whitespace from both ends of a string.

javascript
Copy code
const str = "   Hello, World!   ";
const trimmed = str.trim(); // "Hello, World!"
These are just some of the many string methods available in JavaScript. Familiarizing yourself with these methods will give you a solid foundation for working with strings in your JavaScript projects. Happy coding!




User



which array methods manipulates the original data inn javascript
ChatGPT
In JavaScript, there are several array methods that manipulate the original array. These methods directly modify the array they are called on. Here are some commonly used array methods that perform in-place modifications:

push(): Adds one or more elements to the end of an array and returns the new length of the array.

Example:

javascript
Copy code
const myArray = [1, 2, 3];
myArray.push(4); // myArray is now [1, 2, 3, 4]
pop(): Removes the last element from an array and returns that element.

Example:

javascript
Copy code
const myArray = [1, 2, 3];
const poppedElement = myArray.pop(); // myArray is now [1, 2], poppedElement is 3
shift(): Removes the first element from an array and returns that element.

Example:

javascript
Copy code
const myArray = [1, 2, 3];
const shiftedElement = myArray.shift(); // myArray is now [2, 3], shiftedElement is 1
unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

Example:

javascript
Copy code
const myArray = [2, 3];
myArray.unshift(1); // myArray is now [1, 2, 3]
splice(): Changes the contents of an array by removing, replacing, or adding elements. It can be used to add, remove, or replace elements at any position.

Example:

javascript
Copy code
const myArray = [1, 2, 3, 4];
myArray.splice(1, 2); // myArray is now [1, 4]
reverse(): Reverses the order of the elements in an array.

Example:

javascript
Copy code
const myArray = [1, 2, 3, 4];
myArray.reverse(); // myArray is now [4, 3, 2, 1]
sort(): Sorts the elements of an array in place and returns the sorted array.

Example:

javascript
Copy code
const myArray = [3, 1, 4, 1, 5, 9, 2, 6];
myArray.sort(); // myArray is now [1, 1, 2, 3, 4, 5, 6, 9]
Remember, when using these methods, you're directly modifying the original array. If you want to avoid modifying the original array, you can create a copy of it using methods like slice() or spread syntax ([...myArray]) and then perform the desired operations on the copy.


![Screenshot (90)](https://github.com/divyagupta167/JavaScript/assets/54738711/23e7c2bf-f701-43a0-ae70-2d8a12ef15f8)

![Screenshot (92)](https://github.com/divyagupta167/JavaScript/assets/54738711/113dfffa-62a3-4696-b538-2caddca6a723)

![Screenshot (97)](https://github.com/divyagupta167/JavaScript/assets/54738711/31134307-761e-42fc-822b-ad97beeb5868)

![Screenshot (100)](https://github.com/divyagupta167/JavaScript/assets/54738711/8243711c-1a98-4438-b84e-8a7b84a0f3fe)

![Screenshot (101)](https://github.com/divyagupta167/JavaScript/assets/54738711/7d1c8566-4d16-4db2-b2e2-bd413db8140b)

