//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов

let arr = [10, 23, 60, 3, 18];
// for (let i in arr) {
//     str = arr[i] + arr[i] * 0.1;
//     console.log(str);
// }
let to10Percent = arr.map(num => num * 1.1);
console.log(to10Percent);