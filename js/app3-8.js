// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
let sevenDigits = parseInt(prompt('Enter seven digits number'));
let digit1 = Math.floor(sevenDigits % 100000 / 10000);
let digit2 = Math.floor(sevenDigits % 10000 / 1000);
let digit3 = Math.floor(sevenDigits % 1000 / 100);
let digit4 = Math.floor(sevenDigits % 100 / 10);
let digit5 = sevenDigits % 10;
alert(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);