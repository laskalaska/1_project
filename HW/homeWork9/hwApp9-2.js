// Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки. Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу, достатньо зберігати дані про результати виклику.
//
//     Зберігати потрібно останні 10 дзвінків.

function memoize(fun) {
    let cache = {};
    const maxCapacity = 10;

    return function () {
        const args = [].slice.call(arguments);
        const key = args.join(',');

        if (cache.hasOwnProperty(key)) {
            console.log('cached value')
            return cache[key];
        }

        console.log('new value')
        let result = fun.apply(null, args);

        cache[key] = result;

        if (Object.keys(cache).length > maxCapacity) {
            const firstKey = Object.keys(cache)[0];
            delete cache[firstKey];
        }
        return result;
    }
}

function sum(a, b) {
    return a + b;
}

let memoizeSum = memoize(sum);

console.log(memoizeSum(1, 3)); //new value
console.log(memoizeSum(1, 3)); //cached value
console.log(memoizeSum(2, 5));
console.log(memoizeSum(3, 3));
console.log(memoizeSum(4, 3));
console.log(memoizeSum(5, 3));
console.log(memoizeSum(6, 3));
console.log(memoizeSum(7, 3));
console.log(memoizeSum(8, 3));
console.log(memoizeSum(9, 3));
console.log(memoizeSum(10, 3));
console.log(memoizeSum(11, 3));
console.log(memoizeSum(1, 3)); //new value, previous was deleted


