class product {
    // properties, behaviour 
    // name;
    // price;
    // rating;

    constructor(n, p, r) {
        console.log("CALLING THE CONSTRUCTOR");
        this.name = n
        this.price = p
        this.rating = r
    }
    display() {
        console.log("this refers to",this);
        console.log("Display the current product", this.name, this.price, this.rating);
    }
}

const p = new product("S23ultra", 123000, 5);
console.log(p);
p.display();

 