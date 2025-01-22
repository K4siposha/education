//Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

// let str = '023m0df0dfg0';
// let arr = [];
// for (let i=0; i<str.length; i++) {
//     if (str[i] === '0') arr.push(i);
// }
// console.log(arr);

const str1 = '023m0df0dfg0';
let arrPos = [];
for (let i = 0; i < str1.length; i++) {
    if (str1[i] === '0') {
        arrPos.push(i)
    }
}
console.log(arrPos);