// for each is usually for arrays
// for array containing objects,i.e  array of objects

const coding = [1,2,3,4,5]


//callback function doesn't have name


coding.forEach((item)=>{
    console.log(item);
})
//OR
coding.forEach(function(item){
    console.log(item);
})


// we can even pass a function as argument to foreach
function prints(item) {
    console.log(item); 
}

coding.forEach(print)  // dont execute, give only reference of function

// parameters of for each
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})


// to iterate data coming from data base, which is an array of objects
const myCoding =[
    {
        name:'divya',
        id:10
    },
    {
        name:'gupta',
        id:11
    },
    {
        name:'good',
        id:12
    },
    {
        name:'girl',
        id:13
    }
]

myCoding.forEach((item)=>{
    console.log(item.name);
    console.log(item.id);
})