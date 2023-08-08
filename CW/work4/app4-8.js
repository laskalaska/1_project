// Вивести всі числа в діапазоні від 100 до 200, які кратні 3
let lowerLimit = 100;
let upperLimit = 200;

for (let i = lowerLimit; i <= upperLimit; i++) {
    if (!(i % 3)) {
        console.log(i);
    }
}