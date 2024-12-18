//Дано некоторое число:
// 12345
// Переверните его:
// 54321

let num = 12345;
let arr = Array.from(String(num));
console.log(arr.reverse().join());