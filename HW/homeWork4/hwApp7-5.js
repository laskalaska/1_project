// Дано деяке число. Ваше завдання – визначити, чи можна отримати це число, піднявши число 3 до певного натурального ступеня. (Як приклад, числа 9 та 81 можна отримати цим способом, але 13 – ні.)
let number = parseInt(prompt('Enter number'));
let isPower = false;
let power = 1;


for (let i = 3; i <= number; i *= 3) {
    if (i === number) {
        isPower = true;
        break;
    }
    power++;
}

if (isPower) {
    alert(`${number} this number CAN be obtained by raising the number 3 to ${power} natural power`);
} else {
    alert(`${number} this number CAN NOT be obtained by raising the number 3 to a natural power`);
}
