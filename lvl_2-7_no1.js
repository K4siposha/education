//Дана некоторая строка:
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'

let uppercase = (str) => {
    return str
        .split(' ')
        .map(substring => {
            if (substring.length <= 3) {
                return substring.toUpperCase();
            } else {
                return substring;
            }
        })
        .join(' ');
}

let a = 'a bc def ghij';
let result = uppercase(a);
console.log(result);