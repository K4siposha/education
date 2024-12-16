//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти
let arr = (num) => {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0 && num[i] <= 10) {
            result += num[i];
        }
    }
    console.log(result);
}

arr([4,6,2,8,9,45,73,43,5,78,94,25,4,3]);