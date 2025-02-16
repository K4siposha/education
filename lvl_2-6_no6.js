//Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'

let a = 'aaa bbb ccc eee fff';
let b = a.split(' ').map((word, index) => {
    if (index % 2 !== 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
}).join(' ');

console.log(b);