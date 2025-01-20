//Дано число. Выведите в консоль количество четных цифр в этом числе
// let number = 245;
// let result = number.toString().split('').filter(digit => digit % 2 === 0).length;
// console.log(result);

const num = 14243;
let str = num.toString(),
    acc = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
        acc++;
    }
}
console.log(acc);