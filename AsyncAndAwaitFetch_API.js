function createPromise() {
    return new Promise(function exec(resolve,reject) {
        // your code goes here 
        setTimeout(function f() {
            console.log("timer done");
            resolve(10);
        }, 3000)
    });
}

async function consume() {
    try {
        console.log("inside function");
        const response = await createPromise();
        const response1 = await createPromise();
        console.log("response is", response);
    } catch(err) {
        console.log("handeld", err);
    }
  
}

console.log("start");
consume();

console.log("end");