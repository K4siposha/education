//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
let i = 4551;
const number1 = String(i)[0];
const number2 = String(i).slice(-1);
let sum = (+number1) + (+number2);
console.log(sum);