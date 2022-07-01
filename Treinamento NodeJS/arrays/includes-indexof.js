const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 7, 9, 6];

let alunosEMedias = [alunos, medias];

function exibeNomeNota(nomeAluno) {
    if (alunosEMedias[0].includes(nomeAluno)) {
        i = alunosEMedias[0].indexOf(nomeAluno);
        return `${alunosEMedias[0][i]} sua média é: ${alunosEMedias[1][i]}`;
    } else {
        return 'Aluno não está cadastrado';
    }
}

for (let i = 0; i < alunos.length; i++) {
    nomeAluno = alunosEMedias[0][i];
    console.log(exibeNomeNota(nomeAluno));
}