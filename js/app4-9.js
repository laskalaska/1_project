// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let digit = parseInt(prompt('Enter number'));
for (let i = 1; i <= digit; i++) {
    if (!(digit % i)) {
        console.log(i);
    }
}