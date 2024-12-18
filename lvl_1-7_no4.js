//Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

let sumDigits = num => {
    return num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumDigits(12345));