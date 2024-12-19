//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html
let arr = ['delevoper.html', 'my.money', 'lizard', 'you.html'];
console.log(arr.filter(str => str.endsWith('.html')));