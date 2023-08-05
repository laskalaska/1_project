// Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
let lowerLimit = 20;
let upperLimit = 30;
let result = '';

for (let i = lowerLimit; i <= upperLimit; i += 0.5) {
    result += `${i} `;
}
console.log(result);