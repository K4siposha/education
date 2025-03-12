//Дано число. Получите первую четную цифру с конца этого числа

// let digitFromEnd = (number) => {
//     const strNumber = String(number).split('').reverse().join('');
//
//     for (let digit of strNumber) {
//         if (digit % 2 === 0) {
//             return digit;
//         }
//     }
//     return null;
// }
//
// let number = 123456789;
// let evenDigit = digitFromEnd(number);
// console.log(evenDigit);

let digitFromEnd = (number) => {
    let strNumber = String(number);
    for (let i = strNumber.length - 1; i >= 0; i--) {
        if (+strNumber[i] % 2 === 0) {
            return +strNumber[i];
        }
    }
    return null;
}

console.log(digitFromEnd(123456789));