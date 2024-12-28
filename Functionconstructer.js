function Product (n, p, r) {
    this.name = n;
    this.Product = p;
    this.rating = r;
}


const p = new Product("macbook", 150000, 5)
console.log(p);