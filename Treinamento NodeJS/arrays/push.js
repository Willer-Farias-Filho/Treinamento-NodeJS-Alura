const notas = [10, 6, 8];
notas.push(7);
console.log(notas);


let resultadoSoma = 0;

function somaNotas() {
    for (let i = 0; i < notas.length; i++) {
        resultadoSoma += notas[i];
    }
    console.log(resultadoSoma)
}

function calculaMedia() {
    let media = resultadoSoma / notas.length;
    console.log(media)
}


somaNotas();
calculaMedia();