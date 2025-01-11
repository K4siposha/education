//Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов
let arr = [1, 2, 3, 4, 5, 6];
let result1 = arr.slice(0,3).reduce((accumulator, currentValue) => accumulator + currentValue);
let result2 = arr.slice(3,6).reduce((accumulator, currentValue) => accumulator + currentValue);
let sum = result1 / result2;
console.log(sum);

let length = arr.length;
let sumFirstHalf = arr.slice(0, length / 2).reduce((sum, current) => sum + current, 0);
let sumSecondHalf = arr.slice(length / 2).reduce((sum, current) => sum + current, 0);
console.log(sumFirstHalf / sumSecondHalf);