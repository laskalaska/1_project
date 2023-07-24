// За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
let userName = prompt('What is your name?');
alert(`Hello, ${userName}! How are you?`);

// Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
let firstNumber = parseInt(prompt('Insert first number'));
let secondNumber = parseInt(prompt('Insert second number'));
alert(`Sum of numbers is ${firstNumber + secondNumber}`);
alert(`Subtracting of numbers is ${firstNumber - secondNumber}`);
alert(`Multiplication of numbers is ${firstNumber * secondNumber}`);
alert(`Division of numbers is ${firstNumber / secondNumber}`);

//Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
let compareFirstNumber = parseInt(prompt('Insert first number'));
let compareSecondNumber = parseInt(prompt('Insert second number'));
alert(compareFirstNumber === compareSecondNumber);

//Визначити середнє арифметичне трьох чисел
let theFirstNumber = parseInt(prompt('Insert first number'));
let theSecondNumber = parseInt(prompt('Insert second number'));
let theThirdNumber = parseInt(prompt('Insert third number'));
alert((theFirstNumber + theSecondNumber + theThirdNumber)/3);

// Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)
let fiveDigits = parseInt(prompt('Enter five digits number'));
let digit1 = Math.floor(fiveDigits % 100000 / 10000);
let digit2 = Math.floor(fiveDigits % 10000 / 1000);
let digit3 = Math.floor(fiveDigits % 1000 / 100);
let digit4 = Math.floor(fiveDigits % 100 / 10);
let digit5 = fiveDigits % 10;
alert(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);


// alert('hello world');
// console.log(message1);
// let message1 = "hello y\'all \nconsole";
// let regex = /\d/
// console.log(regex);
// console.log(message1);
//
// let user = {
//     name: 'John',
//     surname: 'Doe',
//     age: 18,
//     isAdmin: true
// };
//
// let summery = [user, test='yes'];
// console.log(summery);
// console.log(typeof summery);
//
// let a = 12;
// let b = '2'
// console.log(a * b)
