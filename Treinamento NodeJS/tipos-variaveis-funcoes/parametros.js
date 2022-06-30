// Parâmetros de função

function soma (numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(50, 25));
console.log(soma(250, 220));

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

console.log(multiplica(soma(4, 5)));

// Parâmetros X Argumentos

// Ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos de idade.`;
}

console.log(nomeIdade('Willer', 20));