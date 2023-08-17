// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, указанного в переменной znak. Оба числа и знак получаются от пользователя.
function doMath(x, znak, y) {
    switch (znak){
        case '+':
            return x+y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x,y);
    }
}

let x = parseInt(prompt('Enter x'));
let y = parseInt(prompt('Enter y'));
let sign = prompt('Enter sign');

let result = doMath(x, sign, y);
console.log(`Result: ${result}`)
