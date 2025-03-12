//Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв

// let threeLetters = (str) => {
//     const l = str.match(/[A-Za-z]/g);
//     if (l && l.length > 3) {
//         return false;
//     } else
//     return true;
// }

let threeLetters = (str) => (str.match(/[A-Za-z]/g) || []).length <= 3;

console.log(threeLetters('123f3s44j'));