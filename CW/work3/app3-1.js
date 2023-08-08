//Дано два різні числа. Визначити, яке з них більше, а яке менше.
let digit1 = parseInt(prompt('Enter first number'));
let digit2 = parseInt(prompt('Enter second number'));
if (digit1 > digit2) {
    alert(`${digit1} > ${digit2}`);
}else if (digit2 > digit1) {
    alert(`${digit1} < ${digit2}`);
} else if (digit1 === digit2){
    alert(`${digit1} = ${digit2}`);
}
