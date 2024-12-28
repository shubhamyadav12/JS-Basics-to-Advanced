let obj = {
    x: 10,
    fun() {
        y = {
            gun: () => {
                console.log(this.x);
            }
        }

        y.gun();
    }
}

obj.fun();