const car = {
    make: 'Tesla',
    model: 'Y',
    year: 2024,
    color: 'White',
    price: 49900.00,
    drive: function() {
        console.log(`${this.year} ${this.make} ${this.model} drives well!`);
    },
    getPrice: function() {
        return this.price;
    },
    getDiscount: function() {
        return this.price * .9;
    },
    info: function() {
        console.log(`${this.year} ${this.make} ${this.model} is $${this.price}`);
    }
};

car.drive();
console.log(car.getPrice());
console.log(car.getDiscount());

car.info();