// Вивести на сторінку в один рядок через кому числа від 10 до 20
let str = '';
let minNum = 10;
let maxNum = 20;

for (let i= minNum; i<=maxNum; i++){
    if (i === maxNum){
        str += `${i}`
        break;
    }
    str += `${i}, `
}

console.log(str);