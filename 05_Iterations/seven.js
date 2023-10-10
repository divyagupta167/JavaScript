const myNum = [1,2,3,4,5,6,7,8,9]


// map returns value
// const newNum = myNum.map((num)=> num + 10)


//Chaining 

const  newNum = myNum
    .map((num)=> num * 10)
    .map((num)=> num + 1) // result of first map is passed here
    .filter((num)=>num >= 40)

console.log(newNum);