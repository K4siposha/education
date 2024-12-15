//Дано число. Выведите в консоль последнюю цифру этого числа.
let number = 123;
let firstDigit = String(number).slice(-1);
console.log(firstDigit);