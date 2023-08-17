// Написать функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором — суммирует переданный параметр с тем, что передали первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28

function outer () {
    let x = 0;
    return function (num) {
        x += num;
        return x;
    }
}

const sum = outer();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));