//Дан массив с числами. Найдите сумму положительных элементов этого массива
let arr = (num) => {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        if(num[i] > 0) {
            result += num[i];
        }
    }
    console.log(result);
}

arr([0,-4,5,-1,8,3]);