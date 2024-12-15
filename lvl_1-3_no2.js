//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
let divWithoutRemainder = (num1, num2) => {
    if (num1 % num2 === 0) {
        return 'Нет остатка'
    } else {
        return 'Есть остаток'
    }
};

console.log(divWithoutRemainder(10, 5));

//let divWithoutRemainder2 = (num1, num2) => {
//    if (num1 % num2 === 0) {
//        console.log('Нет остатка');
//    } else {
//        console.log('Есть остаток');
//    }
//};

//divWithoutRemainder2(10, 5);