// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
let number = parseInt(prompt('Enter two digits number'));
let digit1 = Math.floor(number * 0.1);
let digit2 = number % 10;

if (digit1 > digit2) {
    alert(`${digit1} is greater than ${digit2}`);
} else if (digit2 > digit1) {
    alert(`${digit2} is greater than ${digit1}`);
} else if (digit1 === digit2) {
    alert(`${digit1} is equal to ${digit2}`);
}