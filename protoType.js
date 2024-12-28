let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "flash", "superman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
};

Object.prototype.shubham = function() {
    console.log('Shubham is present in all objects');
}

console.log(myHeros.shubham());
console.log(heroPower.shubham());

Array.prototype.heyShubham = function() {
    console.log('Shubham say Hii');
}

console.log(myHeros.shubham());
console.log(heroPower.shubham());
