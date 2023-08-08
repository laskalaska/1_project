// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
let digit1 = parseInt(prompt('Enter first number'));
let digit2 = parseInt(prompt('Enter second number'));

if (digit1%digit2) {
    alert(`${digit2} is not divider of ${digit1}`);
}else if (!(digit1%digit2)) {
    alert(`${digit2} is divider of ${digit1}`);
}

if (digit2%digit1) {
    alert(`${digit1} is not divider of ${digit2}`)
}else if (!(digit2%digit1)){
    alert(`${digit1} is divider of ${digit2}`)
}