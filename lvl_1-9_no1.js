//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://

let arr = ['http://delevoper.com', 'my.money', 'lizard', 'http://you.be'];
console.log(arr.filter(str => /^[http://]/i.test(str)));