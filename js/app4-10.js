// Визначити кількість його парних дільників
let digit = parseInt(prompt('Enter your number'));
let count = 0;

for (let i = 1; i <= digit; i++) {
    if (!(digit % i) && !(i % 2)) {
        console.log(i);
        count++;
    }
}

console.log(count);