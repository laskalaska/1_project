//Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.
//
// Наприклад:
//
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i
let generateKey = function (length, characters) {
    let result = [];
    let charArr = characters.split('');
    for (let i = 0; i < length; i ++){
        let randomChar = charArr[Math.floor(Math.random() * charArr.length)];
        result.push(randomChar);
    }
    return result.join('');
}


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

