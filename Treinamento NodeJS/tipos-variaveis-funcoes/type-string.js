const texto1 = "Olá mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";
console.log(texto1);
console.log(texto2);
console.log(senha);
console.log(stringDeNumeros);


// concatenação

const citacao = 'Meu nome é ';
const meuNome = "Willer";
console.log(citacao + meuNome);


// UTF

const cifrao = "/u0024";
const aMaiusculo = "/u0041";
const tique = "/u2705";
const hiragama = "/u3041";
console.log(cifrao + aMaiusculo + tique + hiragama);


// Formatação

const cidade = "campinas";
const input = "Campinas";

console.log(cidade === input);  // false

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo);  // true

console.log(senha.length);


// template string OU template literal