// Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let lowerLimit = 1;
let upperLimit = 10;
let sum = 0;
let count = upperLimit - lowerLimit + 1

for (let i = lowerLimit; i <= upperLimit; i++) {
    sum += i;
}

let result = sum / count;
console.log(result);