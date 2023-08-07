// Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.
let newArr = [];
let arrLength = parseInt(prompt('Enter the number of elements in array'));

for (let i = 0; i < arrLength; i++) {
    let arrElement = prompt(`Enter your ${i + 1} element of array`);
    newArr.push(arrElement);
}

alert(`Your array: ${newArr}`);
alert(`Your array sorted: ${newArr.sort()}`);
let splicedArr = newArr.splice(2,3);
alert(`Your array: ${newArr}`);

// let students = [
//     'Kyle',
//     'Brian',
//     'Frank',
//     'John',
//     'Kate',
// ]
//
// for(let i = 0; i < students.length; i++){
//     console.log(i);
//     document.write(students[i]);
// }
// // document.write(students);
// document.write(students.length);
// document.write('<a href="#">' + 'try link' + '</a>');