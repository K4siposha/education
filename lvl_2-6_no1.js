//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки

// let str = 'h454534ghg4sdf552fg1354', arr = [], reg = /\d/g, res;
// while (res = reg.exec(str)) {
//     arr.push(res.index);
// }
// console.log(arr);

let str = 'h454534ghg4sdf552fg1354';
const positions = Array.from(str.matchAll(/\d/g), match => match.index);
console.log(positions);