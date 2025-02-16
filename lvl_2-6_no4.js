//Дана некоторая строка:
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'

let a = 'AbCdE';
// let b = '';
// for (let i = 0; i < a.length; i++) {
//     const char = a[i];
//     b += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
// }
// console.log(b);

let result = Array.from(a)
    .map(ch => ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase())
    .join('');
console.log(result)