let score = 4
function one() {
    let score = 0
    console.log(score);
}

function two() {
    let score = 3
    console.log(score);
}

function three() {
    console.log(score);
}

one()
two()
three()
console.log(score);

function outerFunc() {
    let outerVar = 'i am at scope level at one'
    function innerFunc() {
        console.log(outerVar);
    }
    innerFunc()
}

outerFunc()


const myGlobalValue = 0
 function func(){
    const val1 = 1
    console.log(myGlobalValue);

    function innerofFunc(){
        const val2 = 2
        console.log(val2, val1, myGlobalValue);

        function innerofinnerfunc(){
            const val3 = 3
            console.log(val3, val2, val1, myGlobalValue);
        }
        innerofinnerfunc()
    }
    innerofFunc()
 }
 
 func()



//  closure =============================================

function superFunc(){
    let outervalue = 'i am outer'
    function minorFunc(){
        console.log(outervalue);
    }
    minorFunc()
}

superFunc()


const errorMessege = 'File not found'
setTimeout(function callback(){
    console.log(errorMessege);
},1000)

let pageCount = 0

const items = [2, 3, 4, 5, 6]

items.forEach(function irerator(num){
    pageCount++
    console.log(num);
})

console.log("pageCount", pageCount);