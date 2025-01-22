//Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'

// let str = 'abcdefg';
// let newStr = '';
// for (let i=0; i<str.length; i++) {
//     if ((i+1) % 3 !==0) {
//         newStr += str[i];
//     }
// }
// console.log(newStr);

// const str1 = '123456789123';
// let arr = str1.split(''),
//     del;
// for (let i = 2; i < str1.length; i += 3) {
//     del += arr[i];
// }
// arr = arr.filter(e => !~del.indexOf(e));
// console.log(arr.join(''));

const str1 = 'abcdefg';
let arr = str1.split(''),
    del = '';
for (let i = 2; i < str1.length; i += 3) {
    del += arr[i];
}
arr = arr.filter(e => !~del.indexOf(e));
console.log(arr.join(''));