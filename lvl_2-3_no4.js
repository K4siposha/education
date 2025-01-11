//Дана дата в следующем формате:
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

// let str = '2025-12-31';
// let date = str.split('-');
// console.log(result = {
//     year: date[0],
//     month: date[1],
//     day: date[2]});
//

let dateString = '2025-12-31';
const [year, month, day] = dateString.split('-');
const convertedDate = {
    year,
    month,
    day,
};
console.log(convertedDate);