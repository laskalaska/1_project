// Дано тризначне число.
//     Чи правда, що всі цифри однакові?
//     Чи є серед цифр цифри однакові?
let number = parseInt(prompt('Enter three digit number'));
let digit1 = Math.floor(number % 1000 /100);
let digit2 = Math.floor(number % 100 / 10);
let digit3 = Math.floor(number % 10);

if (digit1 === digit2 && digit2 === digit3) {
    alert(`${digit1} and ${digit2} and ${digit3} are equal`);
} else {
    alert(`${digit1} and ${digit2} and ${digit3} are not equal to each other`);
}

if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3) {
    alert(`There are equal digits`);
} else {
    alert('No equal digits');
}