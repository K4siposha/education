//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве
let arr = [-1,2,4,-6,-18,9];
let neg_count=0;
for(let i = 0;i < arr.length; i++){
    if (arr[i] < 0)
        neg_count++;
}
console.log(neg_count);