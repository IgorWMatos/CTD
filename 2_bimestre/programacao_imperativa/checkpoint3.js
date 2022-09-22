let novoAluno = require('./module/checkpoint3modulo1');

let aluno = [
    {nome : '',
    quantidadeDeFaltas : 0,
    notas : []
}
];

aluno.push(new novoAluno('Jose', 2, [6, 9, 7]));
aluno.push(new novoAluno('Pedro', 1, [8, 8, 7]));
aluno.push(new novoAluno('Mauricio', 0, [9, 8, 9]));
aluno.push(new novoAluno('Renata', 0, [10, 7, 9]));
aluno.push(new novoAluno('Igor', 0, [9, 7, 10]));

aluno.push(aluno.calcularMedia = aluno.reduce((a, b) => a + b, 0) / aluno.notas.length)

console.log (aluno)