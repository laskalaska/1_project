// Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let number = parseInt(prompt('Enter your number'));
let lowerLimit = 1;
let upperLimit = 100;

for (let i = lowerLimit; i <= upperLimit; i++) {
    let sqr = i ** 2;
    if (sqr < number) {
        console.log(`square of ${i} is ${sqr} which is less than ${number}`)
    }
}
