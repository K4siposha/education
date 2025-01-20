//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения
// let obj = {
//     name: "John",
//     age: 21
// };
// let keys = [];
// let values = [];
// for (let key in obj) {
//     keys.push(key);
//     values.push(obj[key]);
// }
// console.log(keys);
// console.log(values);

const user = {
    login: 'Alex',
    password: 12345
}

let arr1 = Object.keys(user),
    arr2 = Object.values(user);
console.log(arr1, arr2);