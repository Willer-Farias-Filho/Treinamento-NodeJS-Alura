const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 7, 9, 6];

let alunosEMedias = [alunos, medias];

for (let i = 0; i < alunos.length; i++) {
    console.log(`${alunosEMedias[0][i]}, sua média é: ${alunosEMedias[1][i]}`);
}