//Дано некоторое число, например, такое:
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28

// let removeOddDigitsNumber = (number) => {
//     let result = 0;
//     let multiplier = 1;
//     while (number > 0) {
//         const digit = number % 10;
//         if (digit % 2 === 0) {
//             result += digit * multiplier;
//             multiplier *= 10;
//         }
//         number = Math.floor(number / 10);
//     }
//     return result;
// }

let digit = 123789;
// const result = removeOddDigitsNumber(digit);
// console.log(result);

let result1 = +String(digit)
    .split('')
    .filter(ch => +ch % 2 === 0)
    .join('');

console.log(result1);