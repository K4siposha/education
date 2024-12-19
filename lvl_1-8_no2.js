//Заполните массив четными числами из промежутка от 1 до 100

let arr = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}
console.log(arr);