// На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо
let webAddress = '';
document.getElementById('startBtn').addEventListener('click', () => {
    webAddress = prompt('Enter web address');
    if (!webAddress) {
        return '';
    }
    if (!(/^(https|http):\/\/.*/.test(webAddress))) {
        webAddress = 'https://' + webAddress;
    }
});

document.getElementById('goBtn').addEventListener('click', () => {
    if (webAddress) {
        window.open(webAddress, '_self');
    }
});