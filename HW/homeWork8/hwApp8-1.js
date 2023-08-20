// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
//
//     Наприклад:
//
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement (array, item) {
    let index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 8);
console.log(array);
