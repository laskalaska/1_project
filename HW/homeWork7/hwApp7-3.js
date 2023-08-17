// Написать функцию заполнения пользовательскими данными двумерного массива. Длину основного массива и внутренних массивов задаёт пользователь. Значения всех элементов всех массивов задаёт пользователь.
function twoDimensionArray() {
    let outerArr = [];
    let outerArrLength = parseInt(prompt('Enter how many inner arrays you want'));
    let innerArrLength = parseInt(prompt('Enter how many elements in arrays you want'));

    for (let i = 0; i < outerArrLength; i++) {

        let innerArr = [];

        for (let a = 0; a < innerArrLength; a++) {
            let arrElement = prompt(`Enter your ${a + 1} element of ${i + 1} array`);
            innerArr.push(arrElement);
        }
        outerArr.push(innerArr);
    }
    console.log(`Your array: ${outerArr}`);
}

twoDimensionArray();