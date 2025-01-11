//Даны числа, разделенные запятыми:
// '12,34,56'
// Найдите сумму этих чисел

// let str = '12,34,56';
// let num = str.split(',');
// let result = 0;
// for (let splitStr of num) {
//     result = result + Number(splitStr);
// }
// console.log(result);

const numbersString = '12,34,56';
const numbersArray = numbersString.split(',').map(Number);
const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);