// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//
//     Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
//
// Ступінь передається як другий аргумент у функцію
//
// pow(num, degree)

function pow(num, degree) {
    if (isNaN(num) || isNaN(degree)) {
        return alert('Both arguments must be a number');
    } else if (degree < 0) {
        return alert('Degree must be a positive number')
    }
    if (degree === 0) {
        return 1;
    } else {
        return num * pow(num, degree - 1);
    }
    // return degree === 0 ? 1 : num * pow(num, degree - 1);
}


let num = parseInt(prompt('Enter the number you want to raise to a power'));
let degree = parseInt(prompt('Enter the power to which you want to raise to the number'));
let result = Math.abs(pow(num, degree));
if (result || result === 0) {
    alert(`Result: ${result}`);
}
