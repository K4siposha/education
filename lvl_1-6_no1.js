//Дан массив с числами. Найдите сумму квадратов элементов этого массива
// let arr = [2, 3, 4];
// let sum = 0;
// for (let elem of arr) {
//     let result = elem ** 2;
//     sum += result;
// }
// console.log(sum);

function squareSum(numbers) {
    return numbers.reduce(function(sum, n) {
        return (n * n) + sum;
    }, 0)
}

console.log(squareSum([2, 3, 4]));