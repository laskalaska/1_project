// Знайти суму його парних дільників
let digit = parseInt(prompt('Enter number'));
let sum = 0;

for (let i = 1; i <= digit; i++) {
    if (!(digit % i) && !(i % 2)) {
        sum += i;
    }
}

console.log(sum);