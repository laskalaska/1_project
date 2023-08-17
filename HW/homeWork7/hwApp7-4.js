// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor". Исходную строку и символы для удаления задаёт пользователь
// let initialWord = prompt('Enter your string');
// let selectedSymbol = prompt('Enter symbols you want to remove from the string');
let initialWord = prompt('Enter your string');
let selectedSymbol = prompt('Enter characters to remove from string separated by commas');
let arrSymbols = selectedSymbol.split(',');
console.log(arrSymbols);

let result = cleaner(initialWord, arrSymbols);
alert(result);

function cleaner (userString, symbols) {
        // let newString = '';
    for (let i = 0; i < symbols.length; i++) {
        userString = userString.replaceAll(symbols[i], '');
    }
    return userString;
}