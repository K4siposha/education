//Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

let reverseNumbers = (arr) => {
    return arr.map(num => {
        const numStr = num.toString();
        const reversedNumStr = numStr.split('').reverse().join('');
        return parseInt(reversedNumStr, 10);
    });
}

let arr = [123, 456, 789];
const brr = reverseNumbers(arr);
console.log(brr);