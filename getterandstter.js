class ComplexNumber {
    #real;
    #imag;
    constructor(r, i) {
        this.#real = r;
        this.#imag = i;
    }

    display() {
        console.log((this.#real, "+ i", this.#imag));
    }
}

const c1 = new ComplexNumber(2, 3);
c1.display();