//Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'

let str = 'abcde';
let arr = str.split('');
for (let i = 0; i < arr.length; i++) {
    if (i % 2) arr[i] = arr[i].toLowerCase();
    else arr[i] = arr[i].toUpperCase();
}
let newStr = arr.join('');
console.log(newStr);

// const str2 = 'abcde';
// let arr2 = str2.split('');
// let arrNew = arr2.map(function (item, i, arr) {
//     if (i % 2 === 0) item = item.toUpperCase();
//     return item;
// })
// console.log(arrNew.join(''));