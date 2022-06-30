/* let x = '';
console.log(x);
x = 'oi'; */

// DECLARAÇÃO DE FUNÇÃO

// 1º - Declara

function imprimeTexto(texto) {
    console.log(texto);
}

// 2º - Executa 

imprimeTexto('oi');
imprimeTexto('outro texto');

// 3 formas de escrever funções

function soma() {
    return 2 + 2;
}

console.log(soma());

imprimeTexto(soma());