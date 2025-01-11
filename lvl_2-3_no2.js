//Дана некоторая строка. Найдите позицию третьего нуля в строке
// let str = 'alpha 01 2004';
// let poz = [];
// for(let i = 0; i < str.length; i++) {
//     if (str[i] === "0") poz.push(i + 1);
// }
// console.log(poz);

let str = "000";

let zeroCount = 0;
let zeroIndex = -1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
        zeroCount++;
        if (zeroCount === 3) {
            zeroIndex = i;
            break;
        }
    }
}
console.log(zeroIndex);