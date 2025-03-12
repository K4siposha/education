//Дано некоторое число:
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

// let sum = (number) => {
//     const strNumber = number.toString();
//     let sum = 0;
//     for (let i = 0; i < strNumber.length; i += 2) {
//         const pair = strNumber.substring(i, i + 2);
//         sum += parseInt(pair, 10);
//     }
//
//     return sum;
// }
//
// let number = 123456;
// let result = sum(number);
// console.log(result); // 12 + 34 + 56 = 102

let sumPairs = (number) => {
    return (String(number).match(/\d{2}/g) || []).reduce((sum, pair) => sum + +pair, 0);
};

console.log(sumPairs(123456));