//Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

let arr = [1, 2, 3, 4, 5, 6];
let chunk = (array, limit) => {
    if (array.length <= limit) return [array];
    const perChunk = Math.ceil(array.length / Math.ceil(array.length / limit));
    return [array.slice(0, perChunk)].concat(chunk(array.slice(perChunk), limit));
}
console.log(chunk(arr, 2));