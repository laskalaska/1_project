// Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).
let number = parseInt(prompt('Enter number'));
let isPrime = true;

while (number <= 1) {
    number = parseInt(prompt('The number must be more than 1'));
}

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    alert(`${number} is prime number`);
} else {
    alert(`${number} is not prime number`);
}