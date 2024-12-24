//Заполните массив случайными числами из промежутка от 1 до 100
let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];
for (i = 0; i < 100; i++){
    arr[i] = getRandom(1,101);
}
console.log(arr);