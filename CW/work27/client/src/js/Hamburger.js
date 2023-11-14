export class Hamburger {
    constructor(price) {
        this.initialPrice = {price};
        this.stuffing = [];
        this.toppings = [];
        this.updatedPrice = 0;
    }

    // static SIZE_SMALL = {price: 50, calories: 20};
    // static SIZE_LARGE = {price: 100, calories: 40};
    static STUFFING_CHEESE = {price: 10, calories: 20};
    static STUFFING_SALAD = {price: 20, calories: 5};
    static STUFFING_POTATO = {price: 15, calories: 10};
    static TOPPING_SPICE = {price: 15, calories: 0};
    static TOPPING_MAYO = {price: 20, calories: 5};

    addTopping(topping) {
        this.toppings.push(topping);
    }

    addStuffing(stuffing) {
        this.stuffing.push(stuffing);
    }

    calculateCalories() {
        // const sizeCalories = this.size.calories;
        // const stuffingCalories = this.stuffing.calories;
        const stuffingCalories = this.stuffing.reduce((total, stuffing) => total + stuffing.calories, 0);
        const toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);

        return stuffingCalories + toppingsCalories;
    }

    calculatePrice() {
        const initialPrice = this.initialPrice.price;
        const stuffingPrice = this.stuffing.reduce((total, stuffing) => total + stuffing.price, 0);
        const toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
        this.updatedPrice = initialPrice + stuffingPrice + toppingsPrice;

        return this.updatedPrice;
    }

}