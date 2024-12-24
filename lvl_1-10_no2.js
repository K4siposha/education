//Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца

// let num = 12345;
// let res = num.toString().split('').map(Number);
// console.log(res.reverse());

let reverseNumber = (num) => {
    return String(num).split('').reverse().join('');
}
console.log(reverseNumber(12345));