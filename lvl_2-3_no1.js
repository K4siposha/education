//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова

// let twoWords = (first, second) => {
//     if (first[0] === second[second.length - 1]) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }
// }
// console.log(twoWords('tremor', 'element'));

let twoWords = (first, second) => {
    if (first[0] === second[second.length - 1]) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
twoWords('tremor', 'element');