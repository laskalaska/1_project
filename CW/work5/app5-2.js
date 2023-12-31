// Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//     Знайти суму та кількість позитивних елементів.
//     Знайти мінімальний елемент масиву та його порядковий номер.
//     Знайти максимальний елемент масиву та його порядковий номер.
//     Визначити кількість негативних елементів.
//     Знайти кількість непарних позитивних елементів.
//     Визначити кількість парних позитивних елементів.
//     Знайти суму парних позитивних елементів.
//     Знайти суму непарних позитивних елементів.
//     Знайти добуток позитивних елементів.
//     Знайти найбільший серед елементів масиву, решту занулити.

let myArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumPositive = 0;
let countPositive = 0;
let countNegative = 0;

let minElement = myArr[0];
let minIndex = 0;

let maxElement = myArr[0];
let maxIndex = 0;

let countPositiveNotPair = 0;
let countPositivePair = 0;
let sumPositiveNotPair = 0;
let sumPositivePair = 0;

let productPositive = 1;

for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > 0) {
        sumPositive += myArr[i]
        countPositive++;
        productPositive *= myArr[i];
        if (myArr[i] % 2) {
            countPositiveNotPair++;
            sumPositiveNotPair += myArr[i];
        } else if (!(myArr[i] % 2)) {
            countPositivePair++;
            sumPositivePair += myArr[i];
        }
    } else if (myArr[i] < 0) {
        countNegative++;
    }

    if (myArr[i] < minElement) {
        minElement = myArr[i];
        minIndex = i;
    }

    if (myArr[i] > maxElement) {
        maxElement = myArr[i];
        maxIndex = i;
    }
    if (i === myArr.length - 1) {
        for (let a = 0; a < myArr.length; a++) {
            if (!(a === maxIndex)) {
                myArr[a] = 0;
            }
        }
    }
}


console.log(`Sum of positive numbers = ${sumPositive}, count of positive numbers = ${countPositive}`);
console.log(`Minimal value of the array is ${minElement}, its index is ${minIndex}`);
console.log(`Maximum value of the array is ${maxElement}, its index is ${maxIndex}`);
console.log(`Count of negative numbers = ${countNegative}`);
console.log(`Count of NOT pair positive numbers = ${countPositiveNotPair}`);
console.log(`Count of pair positive numbers = ${countPositivePair}`);
console.log(`Sum of pair positive numbers = ${sumPositivePair}`);
console.log(`Sum of NOT pair positive numbers = ${sumPositiveNotPair}`);
console.log(`Product of positive numbers = ${productPositive}`);
console.log(myArr);
