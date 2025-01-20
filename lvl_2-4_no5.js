//Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

let text = 'aaa bbb ccc';
let titleCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
}
console.log(titleCase(text));

// const str = 'aaa bbb ccc'
// let arr = str.split(' ');
// let arrNew = arr.map(function (item, i, arr) {
//     item = item[0].toUpperCase() + item.slice(1);
//     return item;
// })
//
// console.log(arrNew.join(' '));