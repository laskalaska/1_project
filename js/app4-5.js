// Знайти добуток усіх цілих чисел від 15 до 35
let lowerLimit = 15;
let upperLimit = 35;
let product = 1;

for (let i = lowerLimit; i <= upperLimit; i++) {
    product *= i;
}

console.log(product);