//Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// let mergedArray = arr1.slice(0, 2).concat(arr2, arr1.slice(2));
//
// console.log(mergedArray);

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
console.log(arr1.slice(0, 2).concat(arr2, arr1.slice(2)));