// for loop
//Basic
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element); 
}

//Array
const array = ["a","b","c"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}

//Keywords
// break and continue
for (let i = 0; i  <= 20; i++) {
    if (i == 5) {
        console.log(detected);
        break; // to break control flow
    }
    if (i == 5) {
        console.log(detected);
        continue; // to skip  control flow for one specific condition
    }
   console.log('${i}');
    
}

