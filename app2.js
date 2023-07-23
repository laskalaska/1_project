//Напишіть скрипт, який рахує кількість секунд за годину.
//
// Запросити у користувача кількість годин
// Порахувати скільки секунд у цій кількості годин
// Записати обчислене значення у змінну
// Вивести цю змінну користувачу в alert
let timeHours = parseInt(prompt('Enter number of hours'));
let timeSeconds = timeHours * 3600;
alert(`${timeHours} hours are ${timeSeconds} seconds`);