//array



//arrays are resizable
// indexing starts from 0
// here, copy operations create shallow copy(copy whose properties share the same reference[deep copy do not share same reference])


const myArr = [0,1,2,3,4,5, true, "divya"] ///same or different types of data items
const myArr2 = new Array(1,2,3,4,5)

//methods
myArr.push(6)
myArr.pop()

myArr.unshift(9) // inserts at the start of the array
myArr.shift() //removes from the start of the array

myArr.includes(7);// boolean ans
myArr.indexOf(3) // gives -1 if values doesn't exist, in other cases gives index

const newArr = myArr.join() // join converts the data type to string and joins the two arrays

// slice and splice
//slice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);
//splice
console.log("A ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("B ", myArr);

//difference between slice and splice
// slice doesn't include last range, splice includes last range
//splice modifies the original array, but slice doesn't
// splice removes the specified range of array from the original array




 