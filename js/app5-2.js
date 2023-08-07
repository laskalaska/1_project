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

let myArr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumPositive = 0;
let countPositive = 0;
let countNegative = 0;
let startValue = myArr[0];

for (let i = 0; i < myArr.length; i++){
    if (myArr[i] > 0){
        sumPositive += myArr[i]
        countPositive++;
    } else if (myArr[i] < 0) {
        countNegative++;
    }

    if (myArr[i] < startValue) {
        
    }
}

// let minElement = Math.min(...myArr);
// let minIndex = myArr.indexOf(minElement);
//
// let maxElement = Math.max(...myArr);
// let maxIndex = myArr.indexOf(maxElement);

console.log(`Sum of positive numbers = ${sumPositive}, count of positive numbers = ${countPositive}`);
console.log(`Minimal value of the array is ${minElement}, its index is ${minIndex}`);
console.log(`Maximum value of the array is ${maxElement}, its index is ${maxIndex}`);
console.log(`Count of negative numbers = ${countNegative}`);
