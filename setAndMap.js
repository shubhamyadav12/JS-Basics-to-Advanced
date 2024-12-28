let emptyset = new Set()

// console.log(emptyset.size);

let myArray = [1, 2, 3, 4]
let newset = new Set(myArray)
// console.log(newset);

newset.add(9)
newset.clear()
// console.log(newset);
// console.log(newset.has(9));



// Set Difference =================================================

function setDifference(SetA, SetB) {
    return new Set([...SetA].filter(el => !SetB.has(el)));
}

// Example usage:
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const difference = setDifference(setA, setB);
// console.log([...difference]); 


// Set Intersection ====================================

function setIntersection(SetA, SetB) {
    return new Set([...SetA].filter(el => SetB.has(el)));
}

const intersection = setIntersection(setA, setB);
// console.log([...intersection]); 



// =============================================================


let map = new Map()
//  console.log(map.size);

 let arr = [
    [1, "shubham"],
    [2, "shiva"],
    [3, "shivam"],
    [4, "naman"],
    [5, "prince"]
 ];

 arr.map((arrayItem) => map.set(arrayItem[0], arrayItem[1]))
 console.log(map);


// let map = new Map();
// console.log("Initial map size:", map.size);

// let arr = [
//     [1, "shubham"],
//     [2, "shiva"],
//     [3, "shivam"],
//     [4, "naman"],
//     [5, "prince"]
// ];

// arr.map((arrayItem) => {
//     map.set(arrayItem[0], arrayItem[1]);
//     console.log(`Added key: ${arrayItem[0]}, value: ${arrayItem[1]} - Current map size: ${map.size}`);
// });

// // To display the final map
// console.log("Final map entries:", Array.from(map.entries()));


