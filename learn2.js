let arr = [2, 3, 4]

arr.forEach(function(shiva, index, array){
    console.log(shiva, array, index);
})

arr.forEach((shiva, index, array) => {
    console.log("arrow: ", index, shiva, array);
})


const heros = ["naagraj",  "jadugar", "maniraj", "vihtim"]


heros.forEach((el) => {console.log(el.toUpperCase())})


// filter
console.log(heros);
const herosWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})
console.log(herosWithRaj)


// SHOPPING CART 

const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev+curr, 0)
console.log(sumOfCartBill);