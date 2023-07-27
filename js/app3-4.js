// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
let digit1 = parseInt(prompt('Enter your number'));
let lastNumber = digit1 % 10;
if (digit1 % 2) {
    alert(`${digit1} is not double number, last digit is ${lastNumber}`);
} else {
    alert(`${digit1} is double number, last digit is ${lastNumber}`);
}