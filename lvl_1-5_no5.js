//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки
let text = 'Mount';
// let id = text.length;
// while (id >= 0) {
//     console.log(text[id]);
//     id--;
// }
for (let id = text.length; id >= 0; id--) {
    console.log(text[id]);
}