// Вивести квадрати чисел від 10 до 20
let str = '';
let lowerLimit = 10;
let upperLimit = 20;

for (let i = lowerLimit; i <= upperLimit; i++){
    let square = i ** 2;
    if (i===upperLimit){
        str += `${square}`;
        break;
    }
    str += `${square}, `;
}

console.log(str);