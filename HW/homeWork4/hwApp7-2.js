// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let lowerLimit = 10;
let upperLimit = 100;
let rate = 40;

for (let i = lowerLimit; i <= upperLimit; i += 10) {
    result = i * rate;
    console.log(`${i} UAH is ${result} USD`)
}
