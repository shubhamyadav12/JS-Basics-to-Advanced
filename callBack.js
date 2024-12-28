// function h(x, fn) {
//     // h is a hof 
//     // fn--> callbacck 
//     console.log(x*x);
//     fn(x*x);
// }

// h(10, exec)

// function exec(n) {
//     console.log("Done with Callback", n);
// }


// console.log("start");

// setTimeout(function f() {
//     console.log("timer done");
// }, 3000);
// // for(let i = 0; i < 1000000000; i++) {}

// console.log("end"):


console.log("start");
setTimeout(function f() {
    console.log("timer done 1");
}, 100)
setTimeout(function f() {
    console.log("timer done 2");
}, 0);

console.log("end");
for(let i = 0; i < 1000000000; i++) {}
    