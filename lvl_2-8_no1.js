//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв

// let checkTwoLetters = (str) => {
//     const upperCaseLetters = str.match(/[A-Z]/g);
//     if (upperCaseLetters) {
//         return upperCaseLetters.length <= 2;
//     }
//     return true;
// }

let checkTwoLetters = (str) => (str.match(/[A-Z]/g) || []).length <= 2;

console.log(checkTwoLetters('Hello World'));
console.log(checkTwoLetters('I See Truth'));