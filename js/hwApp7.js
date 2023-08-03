// Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
// let lowerLimit = 20;
// let upperLimit = 30;
// let result = '';
//
// for (let i = lowerLimit; i <= upperLimit; i += 0.5){
//     result += `${i} `;
// }
// console.log(result);

// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
// let lowerLimit = 10;
// let upperLimit = 100;
// let rate = 40;
//
// for (let i = lowerLimit; i <= upperLimit; i+= 10){
//     result = i * rate;
//     console.log(`${i} UAH is ${result} USD`)
// }

// Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
// let number = parseInt(prompt('Enter your number'));
// let lowerLimit = 1;
// let upperLimit = 100;
//
// for (let i = lowerLimit; i <= upperLimit; i++){
//     let sqr = i ** 2;
//     if (sqr < number){
//         console.log(`square of ${i} is ${sqr} which is less than ${number}`)
//     }
// }

// Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).
// let number = parseInt(prompt('Enter number'));
// let isPrime = true;
//
// while (number <= 1) {
//     number = parseInt(prompt('The number must be more than 1'));
// }
//
// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
//
// if (isPrime) {
//     alert(`${number} is prime number`);
// } else {
//     alert(`${number} is not prime number`);
// }

// Дано кілька. Визначити, чи можна одержати це число шляхом зведення числа 3 деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
let number = parseInt(prompt('Enter number'));


for (let i = 3; i < number; i *= 3) {
    console.log(i);
}

// let pow = 1;
// while (pow < y) {
//     pow = pow * x;
// }