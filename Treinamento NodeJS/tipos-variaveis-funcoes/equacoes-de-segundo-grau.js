// Exemplos de Equações para Teste:
// Delta Negativo: x² - 4x + 5 = 0
// Delta Igual a 0: 4x² - 4x + 1 = 0
// Delta Positivo: x² - 5x + 6 = 0


// Variáveis de Valores a, b, c:
let a = 1;
let b = -5;
let c = 6;


// Variáveis para os Possíveis Resultados:
let x;
let x1;
let x2;
var delta;


// Exibição da Equação
let equacao = `(${String(a)}x²) + (${String(b)}x) + (${String(c)}) = 0`;
console.log(`A Equação é: ${equacao}`);


// Resolução do Delta:
delta = b * b - 4 * a * c;
console.log(`O Delta Desta Esquação é: ${delta}`);


// Resolução da Equação:
if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Como Delta é Positivo temos x1 = ${x1} e x2 = ${x2}`);
}
if (delta === 0) {
    x = (-b + Math.sqrt(delta)) / (2 * a);
    console.log(`Como Delta é Igual a 0, Temos 1 mesmo valor para x1 e x2, sendo ele: ${x}`);
}
if (delta < 0) {
    console.log('Como Delta é Menor que 0, Então Não Temos um Valor de X Dentro do Conjunto Numérico dos Reais.');
}