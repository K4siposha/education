//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

let ch = 'f';
if (ch === ch.toUpperCase()) {
    console.log('В верхнем регистре')
} else {
    console.log('В нижнем регистре')
}