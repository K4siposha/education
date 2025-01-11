//Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     if (parseInt(str[0]) + parseInt(str[1]) === 5) {
//         console.log(i);
//     }
// }

for (let j = 1; j <= 1000; j++) {
    const num = String(j);
    const firstDigit = Number(num[0]);
    const secondDigit = Number(num[1]);

    if (firstDigit + secondDigit === 5) {
        console.log(j);
    }
}