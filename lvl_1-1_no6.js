//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
let word = 'Сделать';
if (word.slice(-1) === 'ь') {
    console.log(word.slice(-2, -1));
} else if (word.slice(-1) !== 'ь') {
    console.log(word.slice(-1));
}