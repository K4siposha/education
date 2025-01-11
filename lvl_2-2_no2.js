//Дан массив с числами. Оставьте в нем только положительные числа
let arr = [-1,2,4,-6,-18,9];
let arr1 = [];
for (let elem of arr) {
    if (elem >= 0) {
        arr1.push(elem);
    }
}
console.log(arr1);

// Вариант с filter

let positiveArr = arr.filter(num => num > 0);

console.log(positiveArr);

// Вариант с reduce

let positiveArrReduce = arr.reduce((acc, num) => num > 0 ? [...acc, num] : acc, []);

console.log(positiveArrReduce);

// Вариант с map

let positiveArrMap = arr.map(num => num > 0 ? num : null).filter(num => num !== null);

console.log(positiveArrMap);