const Coding = [1,2,3,4,5]


// forEach doesn't returns any value, it gives undefined
const values = Coding.forEach((item)=>{
    return item
})

console.log(values); // prints undefined



//filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> {
    return num > 4  // if we open scope we should use return keyword
})
console.log(newNums);


// using for each
const Nums = []
Nums.forEach((num)=>{
    if (num > 4) {
       Nums.push(num)  
    }
})

console.log(Nums);


/// Filters

const Books = [
    {
        title:'one',
        genre:'history',
        publish:7890
    },
    {
        title:'two',
        genre:'science',
        publish:1990
    },
    {
        title:'three',
        genre:'geography',
        publish:2090
    }
]

const userBooks = Books.filter((bk)=> bk.genre === 'history' && bk.title==='one')


console.log(userBooks);