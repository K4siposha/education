//Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
console.log(arr.map(a => a.toFixed(1)));