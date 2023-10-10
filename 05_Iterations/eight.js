const myNums = [1,2,3]

const myTotal = myNums.reduce((acc, currVal)=>{
    return acc + currVal
}, 0)

console.log(myTotal);

//eg

const shopping = [
    {
        name : 'a',
        price : 600
    },
    {
        name : 'b',
        price : 200
    },
    {
        name : 'c',
        price : 9600
    },
]

const total = shopping.reduce((acc,item)=> acc + item.price, 0)

console.log(total);