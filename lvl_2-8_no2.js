//Дана некоторая строка:
// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'

let a = '1 22 333 4444 22 5555 1';
// let substrings = a.split(' ').filter(substring => substring.length <= 3).join(' ');

console.log(a.replace(/\b\w{4,}\b/g, '').replace(/\s+/g, ' ').trim());