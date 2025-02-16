//Дан некоторый массив с числами, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
// [12, 34, 56]

let arr = [1, 2, 3, 4, 5, 6];
let result = [];

for (let i = 0; i < arr.length; i += 2) {
    const combined = '' + arr[i] + arr[i + 1];
    result.push(Number(combined));
}

console.log(result);