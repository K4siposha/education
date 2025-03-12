//Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд

let check = (a) => {
    for (let q = 1; q < a.length; ++q) {
        if (a[q] === a[q-1]) {
            return true;
        }
    }
    return false;
}

console.log(check([1, 2, 3, 3, 4, 5]) ? "Да" : "Нет");