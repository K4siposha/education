//Дан массив с числами:
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

const array = [1, 2, 3, 4, 5];
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }
console.log([...array].reverse().join(' '));