// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
let sixDigits = prompt('Enter six digits number');
let digitReverse = sixDigits.split('').reverse().join('');
if (digitReverse === sixDigits) {
    alert('The number is palindrome');
} else {
    alert('The number is not palindrome');
}