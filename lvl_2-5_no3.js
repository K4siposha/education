//Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// let sumOfEvenNumbers = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
//
// let sumOfOddNumbers = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
//
// let numbers = [1, 2, 3, 4, 5, 6];
//
// console.log(sumOfEvenNumbers(numbers) / sumOfOddNumbers(numbers));

const arr = [1, 2, 3, 4, 5, 6];
let arr1 = [], arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr1.push(arr[i]);
    } else {
        arr2.push(arr[i]);
    }
}

const div = arr1.reduce((acc, number) => acc + number) / arr2.reduce((acc, number) => acc + number);
console.log(div);