// Дано тризначне число.
//     Визначити чи є парною сума його цифр.
//     Визначити, чи кратна сума цифр п'яти.
//     Визначити чи є добуток його цифр більше 100.
let number = parseInt(prompt('Enter three digit number'));
let digit1 = Math.floor(number % 1000 /100);
let digit2 = Math.floor(number % 100 / 10);
let digit3 = Math.floor(number % 10);
let sum = digit1 + digit2 + digit3;
let product = digit1 * digit2 * digit3;

if (sum % 2) {
    alert(`sum of ${number} is ${sum}, and it's not a double number`);
} else {
    alert(`sum of ${number} is ${sum}, and it's a double number`);
}

if (sum % 5) {
    alert(`sum of ${number} is ${sum}, and it doesn't divide by 5`);
} else {
    alert(`sum of ${number} is ${sum}, and it divides by 5`);
}

if (product > 100) {
    alert(`product of ${number} is ${product}, and it is greater than 100`);
} else {
    alert(`product of ${number} is ${product}, and it is less than 100`);
}

// alert(digit1)
// alert(digit2)
// alert(digit3)