//Выведите в консоль все числа кратные трем в промежутке от 1 до 100
let i = 1;
while (i < 100) {
    i++;
    if (i % 3 === 0) {
        console.log(i)
    }
}