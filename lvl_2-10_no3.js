//Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'

let str = 'abcde abcde abcde';
let res = str.replace(/\b\w/g, '!');
console.log(res);