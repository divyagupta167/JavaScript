const marvel =['thor','ironMan', 'hawkeye']
const dc = ['superman','flash', 'batman']


marvel.push(dc) // array takes any type of entry data, even array
console.log(marvel);
console.log(marvel[3][1]); //to print flash, at 3rd index , a complete array is printed


const allHeroes  = marvel.concat(dc) //concat returns new array
console.log(allHeroes);


//spread operator

const all_new_Heroes =[...marvel,...dc]
console.log(all_new_Heroes);



//flat --> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const another = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real = another.flat(Infinity)

//Array method

Array.isArray("Divya") //false

Array.from("Divya") //converts to array
Array.from({name:"Divya"}) // gives empty array !interesting!

let score1 = 100
let score2 = 200
let score3 = 300

Array.of(score1,score2,score3) //Returns a new array from a set of elements.


