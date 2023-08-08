// Вивести суму лише парних чисел у діапазоні від 30 до 80
let lowerLimit = 30;
let upperLimit = 80;
let sum = 0;

for(let i = lowerLimit; i <= upperLimit; i++){
    if(!(i%2)){
        sum += i;
    }
}

console.log(sum);