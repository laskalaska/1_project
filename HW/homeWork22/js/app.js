// маленький гамбургер із начинкою із сиру
const hamburger =  new Hamburger (Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// Добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// Запитаємо скільки там калорій
console.log('Calories: ' + hamburger.calculateCalories());
// скільки коштує
console.log('Price: ' + hamburger.calculatePrice());
// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А скільки тепер коштує?
console.log('Price with sauce: ' + hamburger.calculatePrice());