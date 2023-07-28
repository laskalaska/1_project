// Запросити у користувача рік народження.
//
//     Запитати в нього, в якому місті він живе.
//
//     Запитати його улюблений вид спорту.
//
//     При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
//
//     Його вік.
//     Якщо користувач запровадить Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицю якої він запровадив. Інакше показуємо йому “ти живеш у місті…” і місце точок – введене місто.
//     Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач запровадить один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати…” і підставляємо на місце точок ім'я та прізвище чемпіона.
//
//
// Все це має бути відображено в одному вікні (алерті).
//
//     Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення - "Шкода, що Ви не захотіли ввести свій(ю) ..." і вказуємо, що він не захотів вводити - дату народження, місто або вид спорту.
let message = '';


let userYear = prompt('Enter the year you were born');
if (userYear) {
    let userAge = 2023 - parseInt(userYear);
    message += `Your age is ${userAge}`;
} else if (userYear === null) {
    message += '\nYear of birth was not provided by user';
    alert('It is a bad, you did not want to enter your year of birth');
}

let userCity = prompt('Enter the city you live');
if (userCity) {
    if (userCity === 'Kyiv') {
        message += '\nYou live in the capital of Ukraine';
    } else if (userCity === 'Washington') {
        message += '\nYou live in the capital of USA';
    } else if (userCity === 'London') {
        message += '\nYou live in the capital of UK';
    } else {
        message += `\nYou live in ${userCity}`;
    }
} else if (userCity === null) {
    message += '\nCity was not provided by user';
    alert('It is a bad, you did not want to enter your city');
}

let userSport = prompt('Enter your favorite sport');
if (userSport) {
    if (userSport === 'football') {
        message += '\nGreat! You want to be like Lionel Messi!';
    } else if (userSport === 'golf') {
        message += '\nGreat! You want to be like Tiger Woods!';
    } else if (userSport === 'tennis') {
        message += '\nGreat! You want to be like Rafael Nadal';
    } else {
        message += `\nYour favorite sport is ${userSport}`;
    }
} else if (userSport === null) {
    message += '\nFavorite sport was not provided by user';
    alert('It is a bad, you did not want to enter your favorite sport');
}
alert(message);

