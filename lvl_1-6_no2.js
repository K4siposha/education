//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива
// function sumSquareRoots(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         let sqrt = Math.sqrt(numbers[i]);
//         total = total + sqrt;
//     }
//     return total;
// }
//
// let numbers = ['0','1', '2', '3', '4', '5'];
// let result = sumSquareRoots(numbers);
// console.log(result);

// let sum = (numbers) => {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         let sqrt = Math.sqrt(numbers[i]);
//         total = total + sqrt;
//     }
//     console.log(total);
// }
//
// sum(['0','1', '2', '3', '4', '5']);

let sum = (numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += Math.sqrt(numbers[i]);
    }
    console.log(total);
}

sum(['0','1', '2', '3', '4', '5']);