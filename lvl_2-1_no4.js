//Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

let arr = [1, 2, 3, 4, 5, 6];
let result = arr.slice(0,3).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result);