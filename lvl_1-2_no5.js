//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
let checkFirstDigits = (num1, num2) => {
    let firstDigit1 = String(num1)[0];
    let firstDigit2 = String(num2)[0];
    return firstDigit1 === firstDigit2;
};

let number1 = 12345;
let number2 = 16789;
if (checkFirstDigits(number1, number2)) {
    console.log("Первые цифры чисел совпадают.");
} else {
    console.log("Первые цифры чисел не совпадают.");
}